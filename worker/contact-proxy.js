/**
 * Cloudflare Worker: CORS proxy for Gloria Cloud contact form.
 * Forwards POST to Google Apps Script so the form works from GitHub Pages (no CORS).
 *
 * Deploy: Cloudflare Dashboard → Workers & Pages → Create Worker → paste this code.
 * Add secret: Settings → Variables → APP_SCRIPT_URL = your Apps Script web app URL.
 */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ success: false }), {
        status: 405,
        headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    }

    const scriptUrl = env.APP_SCRIPT_URL;
    if (!scriptUrl) {
      return new Response(
        JSON.stringify({ success: false, message: 'Proxy not configured' }),
        { status: 500, headers: { ...CORS, 'Content-Type': 'application/json' } }
      );
    }

    try {
      const body = await request.text();
      const res = await fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });
      const data = await res.json();
      return new Response(JSON.stringify(data), {
        status: res.status,
        headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    } catch (err) {
      return new Response(
        JSON.stringify({ success: false, message: String(err.message) }),
        { status: 500, headers: { ...CORS, 'Content-Type': 'application/json' } }
      );
    }
  },
};
