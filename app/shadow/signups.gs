/**
 * Shadow early-access sign-ups → Google Sheet.
 *
 * This file is not run by the website. It is the source for the Apps Script
 * that sits behind SHADOW_SIGNUP_SHEET_URL (see actions.ts):
 *
 *   1. Create a Google Sheet, then Extensions → Apps Script.
 *   2. Replace the editor's contents with this file and save.
 *   3. Deploy → New deployment → Web app.
 *        Execute as:      Me
 *        Who has access:  Anyone
 *   4. Copy the web app URL (it ends in /exec) into SHADOW_SIGNUP_SHEET_URL.
 *
 * After editing this script, use Deploy → Manage deployments → Edit → New
 * version. That keeps the same URL; a new deployment would change it.
 */

const SHEET_NAME = "Signups";
const HEADERS = ["Signed up", "Contact", "Type", "Gym"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    // Two sign-ups landing together must not write over the same row.
    lock.waitLock(10000);

    const data = JSON.parse(e.postData.contents);
    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      new Date(),
      asText(data.contact),
      asText(data.kind),
      asText(data.gym),
    ]);

    return respond({ ok: true });
  } catch (err) {
    return respond({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Sheets treats a cell starting with = + or - as a formula. A leading
 * apostrophe makes it store the value as plain text instead.
 */
function asText(value) {
  const text = String(value == null ? "" : value).slice(0, 300);
  return /^[=+\-]/.test(text) ? "'" + text : text;
}

function respond(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
