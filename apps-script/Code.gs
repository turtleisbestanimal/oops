/**
 * OoPs!? — 이메일 수집 엔드포인트 (Google Apps Script)
 *
 * 이 스크립트는 웹앱으로 배포되어, 랜딩페이지의 collect.js가 보내는
 * POST 요청을 받아 스프레드시트에 한 줄씩 적습니다.
 *
 * 설치 방법은 apps-script/SETUP.md 를 보세요.
 */

/* 스프레드시트에서 [확장 프로그램 > Apps Script]로 만들었다면 이 값은
   비워 둔 채로 두세요. 그 시트를 자동으로 찾아갑니다.
   별도 프로젝트로 만들었을 때만, 시트 URL의 /d/ 와 /edit 사이 문자열을 넣으세요. */
var SHEET_ID = '';
var SHEET_NAME = 'emails';

/** 브라우저에서 오는 POST를 받는 진입점 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    /* 동시에 여러 명이 제출해도 줄이 겹쳐 쓰이지 않도록 잠급니다. */
    lock.waitLock(10000);

    var data = JSON.parse(e.postData.contents);

    /* 미끼 칸이 채워져 있으면 봇입니다.
       ok로 답해 봇이 재시도하지 않게 하되, 저장은 하지 않습니다. */
    if (data.company) return json({ ok: true });

    var email = String(data.email || '').trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return json({ ok: false, error: 'invalid_email' });
    }

    var sheet = getSheet();
    var last = sheet.getLastRow();

    /* 이미 등록된 주소인지 확인 (A열) */
    if (last > 1) {
      var known = sheet.getRange(2, 1, last - 1, 1).getValues();
      for (var i = 0; i < known.length; i++) {
        if (String(known[i][0]).trim().toLowerCase() === email) {
          return json({ ok: true, dup: true });
        }
      }
    }

    sheet.appendRow([
      email,
      new Date(),
      data.source || '',
      data.ref || '',
      String(data.ua || '').slice(0, 300)
    ]);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** 브라우저로 주소를 열었을 때의 상태 확인용 */
function doGet() {
  return json({ ok: true, service: 'oops-email-collect' });
}

/** 시트를 찾고, 없으면 헤더까지 만들어 둡니다. */
function getSheet() {
  var ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['email', 'submitted_at', 'source', 'referrer', 'user_agent']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
