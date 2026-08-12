/* ============================================================================
   OoPs!? — 이메일 수집 + 방문자 분석
   ----------------------------------------------------------------------------
   디자인 export(index.html)는 입력칸의 "모양"만 만들어 냅니다. <form>도
   <button>도 없어서, 이메일을 쳐도 아무 데도 가지 않습니다.
   이 파일이 그 입력칸을 찾아 배선하고, Google Apps Script 웹앱으로
   POST를 보냅니다. Vercel Web Analytics도 여기서 함께 불러옵니다.

   index.html은 디자인을 다시 export할 때마다 통째로 덮어써지므로,
   이 파일에는 절대 손대지 않아도 되도록 모든 로직을 여기에 두었습니다.
   덮어쓴 뒤에는 </body> 바로 앞에 아래 한 줄만 다시 넣으면 됩니다.

       <script src="./collect.js" defer></script>

   ※ 설정은 아래 CONFIG 한 곳뿐입니다.
   ========================================================================== */
(function () {
  'use strict';

  var CONFIG = {
    /* Apps Script 웹앱 URL. 시트 "oops 사전 신청"(개인 Gmail 소유)로 연결됩니다.
       재배포로 주소가 바뀌면 여기만 교체하세요. */
    endpoint: 'https://script.google.com/macros/s/AKfycbxX5alvnRJs5WtKmmrEVPcUNvElLiHSzb-wmaqHYaFGEDKN4fkDY5g3RVJUWXqCROmQ/exec',

    /* 동의를 받는 방식.
         false — 등록 행위 자체를 동의로 봅니다(현재). 아래 impliedNote를
                 입력칸 밑에 항상 띄워 수집 목적·보관기간을 고지합니다.
                 막히는 지점이 없어 대기열 서비스에서 흔히 쓰는 방식입니다.
         true  — 체크박스로 명시적 동의를 받습니다. 개인정보 측면에서 더
                 안전하지만, 체크를 빠뜨리면 등록이 막힙니다.

       한국에서는 이메일도 개인정보라 어느 쪽이든 고지 문구는 반드시
       보여야 합니다. 그래서 두 방식 모두 문구를 띄웁니다. */
    requireConsent: false,

    consentLabel: '오픈 알림 수신에 동의합니다.',
    consentNote: '수집 항목: 이메일 · 목적: 서비스 오픈 알림 · 보관: 발송 후 파기(수신거부 시 즉시 삭제)',
    impliedNote: '등록하면 오픈 알림 수신에 동의하는 것으로 봅니다. 수집 항목: 이메일 · 목적: 서비스 오픈 알림 · 보관: 발송 후 파기(수신거부 시 즉시 삭제)',

    /* 같은 브라우저에서 연속 제출을 막는 최소 간격(ms) */
    throttleMs: 3000,

    /* Vercel Web Analytics(방문자 수·유입 경로·국가·기기)를 불러올지 여부.
       디자인 export에는 이 스크립트가 없어서, index.html을 교체할 때마다
       분석이 조용히 끊깁니다. 여기서 함께 불러 두면 재-export 후에도
       <script src="./collect.js"> 한 줄만 되살리면 분석까지 같이 살아납니다. */
    analytics: true,

    /* 이메일 등록 성공 시 커스텀 이벤트를 보낼지 여부.
       방문자 대비 등록 전환율과, 히어로/하단 CTA 중 어디가 잘 먹히는지 볼 수 있습니다. */
    analyticsEvent: true
  };

  var MSG = {
    sending: '보내는 중…',
    ok: '등록됐습니다. 오픈하면 알려 드릴게요.',
    dup: '이미 등록된 이메일입니다.',
    invalid: '이메일 형식을 확인해 주세요.',
    consent: '수집 동의에 체크해 주세요.',
    tooFast: '잠시 후 다시 시도해 주세요.',
    fail: '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.',
    noEndpoint: '수집 주소가 아직 설정되지 않았습니다.'
  };

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var INK = '#111111', MUTED = '#757575', ACCENT = '#9E3500', OK = '#2A86FA';
  var lastSentAt = 0;

  /* ------------------------------------------------- Vercel Web Analytics
     스크립트가 도착하기 전에 호출된 이벤트는 window.vaq 큐에 쌓였다가
     로드 후 한꺼번에 전송됩니다. 그래서 큐 스텁을 먼저 만들어 둡니다. */
  function loadAnalytics() {
    if (!CONFIG.analytics || window.__oopsVA) return;
    window.__oopsVA = true;
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    var s = document.createElement('script');
    s.defer = true;
    s.src = '/_vercel/insights/script.js';
    s.onerror = function () { console.warn('[collect] Vercel Analytics 스크립트를 불러오지 못했습니다.'); };
    (document.head || document.documentElement).appendChild(s);
  }

  function trackSignup(slot) {
    if (!CONFIG.analyticsEvent || typeof window.va !== 'function') return;
    /* data 값은 문자열·숫자·불리언만 허용됩니다. 이메일 주소는 절대 보내지 않습니다. */
    try { window.va('event', { name: 'email_signup', data: { slot: slot || 'unknown' } }); }
    catch (e) { /* 분석 실패가 등록을 막아서는 안 됩니다 */ }
  }

  /* ------------------------------------------------------------------------
     크기에 대하여 — 배율을 추정하지 않습니다.

     한때 screen.width ÷ scrollWidth로 브라우저 축소 배율을 역산해 이 UI만
     키웠습니다. 그 가정이 틀리는 기기가 있었습니다. 페이지를 축소하지 않고
     1440px를 가로 스크롤로 흘려보내는 브라우저에서는 글자가 4배로 커집니다.

     그래서 추정을 버리고, 페이지 본문과 같은 눈금(14px)에 맞춥니다.
     페이지가 축소되면 이 글자도 같이 축소되지만, 본문과 똑같은 비율이므로
     "본문은 읽히는데 이것만 안 보이는" 상황은 생기지 않습니다.
     ------------------------------------------------------------------------ */

  /* ---------------------------------------------------------------- utils */
  function el(tag, style, text) {
    var n = document.createElement(tag);
    if (style) n.setAttribute('style', style);
    if (text != null) n.textContent = text;
    return n;
  }

  /* 이 입력칸이 속한 "칸 상자"(input + 화살표를 담은 flex div) */
  function boxOf(input) { return input.parentElement; }

  /* ---------------------------------------------------------------- 진단
     ?debug=1 을 붙이면 화면 우하단에 실제 동작 로그가 뜹니다.
     "눌러도 아무 일이 없다"를 눈으로 확인할 수 있는 유일한 방법입니다. */
  var DEBUG = /[?&]debug=1/.test(location.search);
  var dbgBox = null;
  function dbg(msg) {
    if (!DEBUG) return;
    if (!dbgBox) {
      dbgBox = document.createElement('div');
      dbgBox.setAttribute('style',
        'position:fixed;right:8px;bottom:8px;z-index:2147483647;max-width:92vw;' +
        'max-height:44vh;overflow:auto;background:#111;color:#0f0;font:12px/1.5 monospace;' +
        'padding:10px 12px;border-radius:8px;white-space:pre-wrap');
      (document.body || document.documentElement).appendChild(dbgBox);
    }
    dbgBox.textContent += msg + '\n';
    dbgBox.scrollTop = dbgBox.scrollHeight;
    if (window.console && console.log) console.log('[collect]', msg);
  }

  /* ------------------------------------------------------- DOM 배선(1회) */
  function decorate(input) {
    if (input.getAttribute('data-oops-wired') === '1') return;
    input.setAttribute('data-oops-wired', '1');

    /* export 결과에는 name도 autocomplete도 없습니다 — 브라우저 자동완성과
       비밀번호 관리자가 인식하도록 채워 줍니다. */
    if (!input.name) input.name = 'email';
    input.setAttribute('autocomplete', 'email');
    input.setAttribute('inputmode', 'email');
    input.setAttribute('spellcheck', 'false');
    if (!input.getAttribute('aria-label')) input.setAttribute('aria-label', '이메일 주소');

    /* 페이지가 자리를 미리 마련해 둔 경우(반응형 랜딩)에는 감싸지 않고
       그 자리를 그대로 씁니다. 레이아웃을 건드릴 이유가 없습니다. */
    var group = input.closest && input.closest('[data-oops-group]');
    if (group) {
      input.__status = group.querySelector('[data-oops-status]');
      var noteSlot = group.querySelector('[data-oops-note]');
      if (noteSlot && !noteSlot.textContent) {
        noteSlot.textContent = CONFIG.requireConsent ? CONFIG.consentNote : CONFIG.impliedNote;
      }
      var hpG = el('input', 'position:absolute;left:-9999px;width:1px;height:1px;opacity:0');
      hpG.type = 'text'; hpG.name = 'company'; hpG.tabIndex = -1;
      hpG.setAttribute('autocomplete', 'off'); hpG.setAttribute('aria-hidden', 'true');
      group.appendChild(hpG);
      input.__hp = hpG;
      dbg('배선 완료(페이지 제공 슬롯): #' + (input.id || '?'));
      return;
    }

    var box = boxOf(input);
    var parent = box.parentElement;
    if (!parent) return;

    /* 부모가 flex row라서 그냥 뒤에 붙이면 옆으로 갑니다.
       칸 상자를 세로 래퍼로 감싸 그 자리를 대신 차지하게 합니다. */
    var wrap = el('div', 'display:flex;flex-direction:column;gap:10px;flex-shrink:0;max-width:100%');
    wrap.setAttribute('data-oops-wrap', '1');
    parent.insertBefore(wrap, box);
    wrap.appendChild(box);

    /* 봇 유인용 미끼 칸 — 사람 눈에는 안 보이고, 채워져 있으면 봇입니다. */
    var hp = el('input', 'position:absolute;left:-9999px;width:1px;height:1px;opacity:0');
    hp.type = 'text';
    hp.name = 'company';
    hp.tabIndex = -1;
    hp.setAttribute('autocomplete', 'off');
    hp.setAttribute('aria-hidden', 'true');
    box.appendChild(hp);
    input.__hp = hp;

    var extra = el('div', 'display:flex;flex-direction:column;gap:8px;max-width:378px');

    if (CONFIG.requireConsent) {
      /* 라벨 전체가 누르는 영역입니다. */
      var label = el('label',
        'display:flex;align-items:flex-start;gap:8px;cursor:pointer;' +
        'padding:4px 6px;margin:-4px -6px;border-radius:6px;' +
        'font-size:14px;line-height:20px;color:' + INK + ';' +
        'transition:background-color 120ms linear,box-shadow 120ms linear');
      var cb = el('input',
        'width:16px;height:16px;margin:2px 0 0;flex-shrink:0;cursor:pointer;accent-color:' + OK);
      cb.type = 'checkbox';
      label.appendChild(cb);
      label.appendChild(el('span', null, CONFIG.consentLabel));
      extra.appendChild(label);
      input.__consent = cb;
      input.__consentRow = label;

      extra.appendChild(el('p',
        'margin:0;font-size:12px;line-height:17px;color:' + MUTED, CONFIG.consentNote));
    } else {
      /* 체크박스는 없지만 고지는 남습니다 — 이메일은 개인정보입니다. */
      extra.appendChild(el('p',
        'margin:0;font-size:12px;line-height:17px;color:' + MUTED, CONFIG.impliedNote));
    }

    var status = el('p',
      'margin:0;font-size:14px;line-height:20px;min-height:20px;font-weight:500;color:' + MUTED);
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    extra.appendChild(status);
    input.__status = status;

    wrap.appendChild(extra);
  }

  /* 동의를 빠뜨렸을 때 조용히 실패하지 않도록, 체크 줄 자체를 강조합니다.
     안내 문구만으로는 시선이 입력칸에 있어 놓치기 쉽습니다. */
  function flagConsent(input) {
    var row = input.__consentRow;
    if (!row) return;
    row.style.backgroundColor = '#FDF1EC';
    row.style.boxShadow = 'inset 0 0 0 1px ' + ACCENT;
    if (input.__consent && input.__consent.focus) {
      try { input.__consent.focus({ preventScroll: false }); } catch (e) { input.__consent.focus(); }
    }
    setTimeout(function () {
      row.style.backgroundColor = '';
      row.style.boxShadow = '';
    }, 2400);
  }

  function say(input, text, tone) {
    var s = input.__status;
    if (!s) return;
    s.textContent = text;
    /* 페이지가 마련한 슬롯이면 색은 페이지 CSS(data-tone)가 정합니다. */
    if (s.hasAttribute('data-oops-status')) s.setAttribute('data-tone', tone || '');
    else s.style.color = tone === 'error' ? ACCENT : (tone === 'ok' ? INK : MUTED);
  }

  /* ------------------------------------------------------------- 제출 */
  function submit(input) {
    if (input.__busy) { dbg('무시: 이미 전송 중'); return; }

    var email = String(input.value || '').trim().toLowerCase();
    dbg('제출 시도: ' + (email || '(빈 값)'));

    if (!EMAIL_RE.test(email)) { dbg('중단: 이메일 형식'); say(input, MSG.invalid, 'error'); input.focus(); return; }
    if (input.__consent && !input.__consent.checked) {
      say(input, MSG.consent, 'error');
      flagConsent(input);
      return;
    }
    if (input.__hp && input.__hp.value) { dbg('중단: 허니팟'); say(input, MSG.ok, 'ok'); return; }
    if (Date.now() - lastSentAt < CONFIG.throttleMs) { dbg('중단: 연타 방지'); say(input, MSG.tooFast, 'error'); return; }
    if (!CONFIG.endpoint) {
      say(input, MSG.noEndpoint, 'error');
      console.error('[collect] CONFIG.endpoint 가 비어 있습니다. collect.js 상단에 Apps Script 웹앱 URL을 넣어 주세요.');
      return;
    }

    input.__busy = true;
    lastSentAt = Date.now();
    say(input, MSG.sending);

    var payload = {
      email: email,
      source: location.pathname + (input.__slot ? '#' + input.__slot : ''),
      ref: document.referrer || '',
      ua: navigator.userAgent || '',
      ts: new Date().toISOString()
    };

    /* Content-Type을 text/plain으로 보내는 것이 핵심입니다.
       application/json이면 브라우저가 OPTIONS 프리플라이트를 먼저 던지는데
       Apps Script 웹앱은 OPTIONS를 처리하지 못해 CORS로 막힙니다.
       text/plain은 프리플라이트가 면제되는 타입이라 그대로 통과합니다. */
    fetch(CONFIG.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    })
      .then(function (r) {
        dbg('응답 http ' + r.status);
        return r.json().catch(function () { return { ok: r.ok }; });
      })
      .then(function (res) {
        dbg('응답 본문: ' + JSON.stringify(res));
        if (res && res.ok) {
          say(input, res.dup ? MSG.dup : MSG.ok, 'ok');
          if (!res.dup) {
            input.value = '';
            trackSignup(input.__slot);   /* 신규 등록만 집계 — 중복은 전환이 아님 */
          }
          if (input.__consent) input.__consent.checked = false;
        } else {
          say(input, MSG.fail, 'error');
          console.error('[collect] 서버 응답:', res);
        }
      })
      .catch(function (err) {
        say(input, MSG.fail, 'error');
        dbg('전송 실패: ' + err);
        console.error('[collect] 전송 실패:', err,
          '\n→ Apps Script 배포 설정에서 "액세스 권한"이 "모든 사용자"인지 확인하세요.',
          '\n→ 광고 차단기나 사내/학교 네트워크가 script.google.com 요청을 막았을 수도 있습니다.');
      })
      .then(function () { input.__busy = false; });
  }

  /* --------------------------------------------------- 이벤트(위임 방식)
     dc 런타임이 DOM을 다시 그려도 살아남도록 document에 한 번만 겁니다. */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    var t = e.target;
    if (t && t.tagName === 'INPUT' && t.type === 'email') {
      e.preventDefault(); dbg('Enter 감지'); submit(t);
    }
  });

  /* 진짜 <form>인 경우(반응형 랜딩) — 네이티브 제출을 가로챕니다.
     모바일 키보드의 "이동/Go"는 keydown 없이 submit만 쏘는 경우가 있어
     이 경로가 없으면 폰에서 조용히 아무 일도 일어나지 않습니다. */
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || !form.querySelector) return;
    var input = form.querySelector('input[type="email"]');
    if (!input) return;
    e.preventDefault(); dbg('form submit 감지'); submit(input);
  }, true);

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    /* dc export의 화살표는 <button>이 아니라 title="보내기"인 <span>입니다. */
    var arrow = t.closest('span[title="보내기"]');
    if (arrow) {
      var i1 = arrow.parentElement && arrow.parentElement.querySelector('input[type="email"]');
      if (i1) { e.preventDefault(); dbg('화살표 클릭 감지'); submit(i1); return; }
    }
    /* 반응형 랜딩의 제출 버튼 */
    var btn = t.closest('button[type="submit"]');
    if (btn) {
      var scope = btn.form || btn.closest('[data-oops-group]') || btn.parentElement;
      var i2 = scope && scope.querySelector('input[type="email"]');
      if (i2) { e.preventDefault(); dbg('제출 버튼 클릭 감지'); submit(i2); }
    }
  });

  /* --------------------------------------------------------- 초기화/감시 */
  function scan() {
    var list = document.querySelectorAll('input[type="email"]');
    for (var i = 0; i < list.length; i++) {
      list[i].__slot = i === 0 ? 'hero' : 'cta';
      decorate(list[i]);
    }
  }

  function start() {
    /* 방문자 분석은 이메일 수집과 독립이므로 항상 먼저 켭니다. */
    loadAnalytics();

    /* 수집 주소가 아직 없으면 아무것도 건드리지 않습니다.
       설정 전까지 사이트는 지금 모습 그대로 보입니다. */
    if (!CONFIG.endpoint) {
      console.info('[collect] 대기 중 — collect.js 의 CONFIG.endpoint 에 Apps Script 웹앱 URL을 넣으면 활성화됩니다. (apps-script/SETUP.md 참고)');
      return;
    }
    scan();
    /* 런타임이 늦게 그리거나 다시 그리는 경우를 대비해 계속 지켜봅니다. */
    if (window.MutationObserver) {
      var pending = null;
      new MutationObserver(function () {
        clearTimeout(pending);
        pending = setTimeout(scan, 100);
      }).observe(document.documentElement, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
