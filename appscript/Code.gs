/**
 * Gloria Cloud Contact Form - Google Apps Script
 * Deploy as Web App: Execute as "Me", Who has access "Anyone".
 * Receives POST JSON: { firstName, lastName, email, service, message }
 * Sends themed HTML emails to merchant (gloriacloudco@gmail.com) and to the customer.
 */

const MERCHANT_EMAIL = 'gloriacloudco@gmail.com';
const SITE_NAME = 'Gloria Cloud';
const SITE_URL = 'https://gloriacloud.com';

/** GET (e.g. opening the URL in a browser) – contact form uses POST */
function doGet() {
  return outputJson({ success: true, message: 'Gloria Cloud contact endpoint. Use POST to submit the form.' });
}

/** Shared email styles matching gloriacloud.com (primary #0284c7, slate, Inter) */
function getEmailStyles() {
  return `
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #334155;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  `;
}

function getEmailHeader() {
  return `
    <div style="background: linear-gradient(135deg, #0c4a6e 0%, #0284c7 100%); padding: 28px 32px; border-radius: 12px 12px 0 0;">
      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.02em;">Gloria Cloud</h1>
      <p style="margin: 6px 0 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">Digital Agency</p>
    </div>
  `;
}

function getEmailFooter() {
  return `
    <div style="padding: 24px 32px; background: #f8fafc; border-radius: 0 0 12px 12px; border-top: 1px solid #e2e8f0;">
      <p style="margin: 0; font-size: 13px; color: #64748b;">Gloria Cloud Digital Agency · <a href="${SITE_URL}" style="color: #0284c7; text-decoration: none;">gloriacloud.com</a></p>
      <p style="margin: 8px 0 0 0; font-size: 12px; color: #94a3b8;">gloriacloudco@gmail.com · (303) 257-2959</p>
    </div>
  `;
}

/** HTML email for merchant: new inquiry notification */
function buildMerchantEmailHtml(data) {
  var name = (data.firstName + ' ' + data.lastName).trim();
  var safeMessage = (data.message || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
  var html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; ${getEmailStyles()} background: #f1f5f9;">
  <div style="max-width: 560px; margin: 0 auto; padding: 24px 16px;">
    <div style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.06); overflow: hidden;">
      ${getEmailHeader()}
      <div style="padding: 28px 32px;">
        <p style="margin: 0 0 20px 0; font-size: 15px; color: #475569;">New contact form submission from <strong>${escapeHtml(name)}</strong>.</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 120px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 500;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #0284c7; text-decoration: none;">${escapeHtml(data.email)}</a></td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${escapeHtml(data.service || '—')}</td></tr>
        </table>
        <p style="margin: 20px 0 0 0; font-size: 13px; color: #64748b;">Message</p>
        <div style="margin-top: 8px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 14px; color: #334155;">${safeMessage}</div>
        <p style="margin: 20px 0 0 0;"><a href="mailto:${escapeHtml(data.email)}?subject=Re: Your inquiry to Gloria Cloud" style="display: inline-block; padding: 12px 24px; background: #0284c7; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">Reply to ${escapeHtml(data.email)}</a></p>
      </div>
      ${getEmailFooter()}
    </div>
  </div>
</body>
</html>
  `;
  return html.trim();
}

/** HTML email for customer: confirmation / thank you */
function buildCustomerEmailHtml(data) {
  var name = (data.firstName || '').trim() || 'there';
  var html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; ${getEmailStyles()} background: #f1f5f9;">
  <div style="max-width: 560px; margin: 0 auto; padding: 24px 16px;">
    <div style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.06); overflow: hidden;">
      ${getEmailHeader()}
      <div style="padding: 28px 32px;">
        <h2 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 700; color: #0f172a;">Thank you for reaching out, ${escapeHtml(name)}</h2>
        <p style="margin: 0 0 16px 0; font-size: 15px; color: #475569;">We've received your message and will get back to you within 24 hours.</p>
        <p style="margin: 0; font-size: 14px; color: #64748b;">If you have any urgent questions, you can reach us directly at <a href="mailto:gloriacloudco@gmail.com" style="color: #0284c7; text-decoration: none;">gloriacloudco@gmail.com</a> or <a href="tel:+13032572959" style="color: #0284c7; text-decoration: none;">(303) 257-2959</a>.</p>
      </div>
      ${getEmailFooter()}
    </div>
  </div>
</body>
</html>
  `;
  return html.trim();
}

function escapeHtml(text) {
  if (text == null) return '';
  return ('' + text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Parse application/x-www-form-urlencoded (e.g. browser form POST). */
function parseFormBody(contents) {
  var out = {};
  if (!contents) return out;
  var pairs = contents.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var kv = pairs[i].split('=');
    if (kv.length >= 2) {
      var key = decodeURIComponent(kv[0].replace(/\+/g, ' '));
      var val = decodeURIComponent((kv.slice(1).join('=')).replace(/\+/g, ' '));
      out[key] = val;
    }
  }
  return out;
}

/**
 * Web app entry: POST with JSON body OR form-urlencoded (firstName, lastName, email, service, message).
 * When form POST (from site): returns HTML that postMessages result to parent. When JSON: returns JSON.
 */
function doPost(e) {
  var result = { success: false, message: '' };
  var isFormPost = false;
  var firstName, lastName, email, service, message;

  var raw = (e && e.postData && e.postData.contents) ? e.postData.contents : null;

  if (e.parameter && (e.parameter.email || e.parameter.message)) {
    isFormPost = true;
    firstName = (e.parameter.firstName || '').toString().trim();
    lastName = (e.parameter.lastName || '').toString().trim();
    email = (e.parameter.email || '').toString().trim();
    service = (e.parameter.service || '').toString().trim();
    message = (e.parameter.message || '').toString().trim();
  } else if (raw && raw.indexOf('{') !== 0 && raw.indexOf('[') !== 0) {
    isFormPost = true;
    var params = parseFormBody(raw);
    firstName = (params.firstName || '').toString().trim();
    lastName = (params.lastName || '').toString().trim();
    email = (params.email || '').toString().trim();
    service = (params.service || '').toString().trim();
    message = (params.message || '').toString().trim();
  } else if (raw) {
    var data = JSON.parse(raw);
    firstName = (data.firstName || '').toString().trim();
    lastName = (data.lastName || '').toString().trim();
    email = (data.email || '').toString().trim();
    service = (data.service || '').toString().trim();
    message = (data.message || '').toString().trim();
  } else {
    result.message = 'No payload';
    return outputJson(result);
  }

  if (!email || !message) {
    result.message = 'Missing required fields';
    return isFormPost ? outputPostMessageHtml(result) : outputJson(result);
  }

  try {
    var payload = { firstName: firstName, lastName: lastName, email: email, service: service, message: message };
    var merchantHtml = buildMerchantEmailHtml(payload);
    var customerHtml = buildCustomerEmailHtml(payload);
    var subjectMerchant = '[' + SITE_NAME + '] New inquiry from ' + (firstName + ' ' + lastName).trim();
    var subjectCustomer = "We've received your message – Gloria Cloud";

    GmailApp.sendEmail(MERCHANT_EMAIL, subjectMerchant, subjectMerchant + '\n\nFrom: ' + email + '\nService: ' + service + '\n\n' + message, { htmlBody: merchantHtml, replyTo: email });
    GmailApp.sendEmail(email, subjectCustomer, "Thank you for contacting Gloria Cloud. We'll be in touch within 24 hours.", { htmlBody: customerHtml, name: SITE_NAME });

    result.success = true;
  } catch (err) {
    result.message = err.toString();
  }
  return isFormPost ? outputPostMessageHtml(result) : outputJson(result);
}

function outputPostMessageHtml(result) {
  var json = JSON.stringify(result);
  var html = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><script>window.parent.postMessage(' + json + ', "*");</script><p>Message sent. You can close this window.</p></body></html>';
  return ContentService.createTextOutput(html).setMimeType(ContentService.MimeType.HTML);
}

function outputJson(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
