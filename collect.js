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

    /* 개인정보 수집 동의 체크박스를 붙일지 여부.
       한국에서는 이메일도 개인정보라 수집 목적·보관기간 고지와 동의가
       필요합니다. 디자인을 원본 그대로 두고 싶으면 false로 바꾸세요. */
    requireConsent: true,

    consentLabel: '오픈 알림 수신에 동의합니다.',
    consentNote: '수집 항목: 이메일 · 목적: 서비스 오픈 알림 · 보관: 발송 후 파기(수신거부 시 즉시 삭제)',

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

  /* ---------------------------------------------------------------- utils */
  function el(tag, style, text) {
    var n = document.createElement(tag);
    if (style) n.setAttribute('style', style);
    if (text != null) n.textContent = text;
    return n;
  }

  /* 이 입력칸이 속한 "칸 상자"(input + 화살표를 담은 flex div) */
  function boxOf(input) { return input.parentElement; }

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

    var extra = el('div', 'display:flex;flex-direction:column;gap:6px;max-width:378px');

    if (CONFIG.requireConsent) {
      var label = el('label',
        'display:flex;align-items:flex-start;gap:8px;cursor:pointer;' +
        'font-size:12px;line-height:18px;color:' + MUTED);
      var cb = el('input', 'margin:2px 0 0;accent-color:' + OK + ';flex-shrink:0');
      cb.type = 'checkbox';
      label.appendChild(cb);
      label.appendChild(el('span', null, CONFIG.consentLabel));
      extra.appendChild(label);
      input.__consent = cb;

      extra.appendChild(el('p',
        'margin:0;font-size:11px;line-height:16px;color:' + MUTED + ';opacity:.85',
        CONFIG.consentNote));
    }

    var status = el('p', 'margin:0;font-size:12px;line-height:18px;min-height:18px;color:' + MUTED);
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    extra.appendChild(status);
    input.__status = status;

    wrap.appendChild(extra);
  }

  function say(input, text, tone) {
    var s = input.__status;
    if (!s) return;
    s.textContent = text;
    s.style.color = tone === 'error' ? ACCENT : (tone === 'ok' ? INK : MUTED);
  }

  /* ------------------------------------------------------------- 제출 */
  function submit(input) {
    if (input.__busy) return;

    var email = String(input.value || '').trim().toLowerCase();

    if (!EMAIL_RE.test(email)) { say(input, MSG.invalid, 'error'); input.focus(); return; }
    if (input.__consent && !input.__consent.checked) { say(input, MSG.consent, 'error'); return; }
    if (input.__hp && input.__hp.value) { say(input, MSG.ok, 'ok'); return; }   /* 봇: 조용히 무시 */
    if (Date.now() - lastSentAt < CONFIG.throttleMs) { say(input, MSG.tooFast, 'error'); return; }
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
      .then(function (r) { return r.json().catch(function () { return { ok: r.ok }; }); })
      .then(function (res) {
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
        console.error('[collect] 전송 실패:', err,
          '\n→ Apps Script 배포 설정에서 "액세스 권한"이 "모든 사용자"인지 확인하세요.');
      })
      .then(function () { input.__busy = false; });
  }

  /* --------------------------------------------------- 이벤트(위임 방식)
     dc 런타임이 DOM을 다시 그려도 살아남도록 document에 한 번만 겁니다. */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    var t = e.target;
    if (t && t.tagName === 'INPUT' && t.type === 'email') { e.preventDefault(); submit(t); }
  });

  document.addEventListener('click', function (e) {
    /* 화살표는 <button>이 아니라 title="보내기"인 <span>입니다. */
    var arrow = e.target.closest && e.target.closest('span[title="보내기"]');
    if (!arrow) return;
    var input = arrow.parentElement && arrow.parentElement.querySelector('input[type="email"]');
    if (input) { e.preventDefault(); submit(input); }
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
