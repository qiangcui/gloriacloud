# Gloria Cloud – Contact Form (Google Apps Script)

This script receives contact form submissions from gloriacloud.com and sends:

1. **To you (merchant)** at `gloriacloudco@gmail.com`: themed HTML email with name, email, service, and message.
2. **To the customer**: themed HTML confirmation email so they know you received their message.

The site submits the form directly to this script (POST into a hidden iframe), so **no Cloudflare Worker or CORS proxy** is needed. The same Apps Script URL works locally and on GitHub Pages.

## GitHub Pages

In the repo → **Settings** → **Secrets and variables** → **Actions**, add **`APP_SCRIPT_URL`** = your **Google Apps Script web app URL** (the same URL you use in `.env.local`). The build injects it so the contact form works on the live site.

## Deploy Apps Script

1. Go to [script.google.com](https://script.google.com) and create a new project.
2. Replace the default `Code.gs` content with the contents of `Code.gs` in this folder.
3. Save (Ctrl/Cmd + S).
4. Deploy as web app:
   - **Deploy** → **New deployment** → type: **Web app**.
   - **Execute as:** Me (your Google account).
   - **Who has access:** Anyone.
   - Click **Deploy**, authorize when asked, then copy the **Web app URL** (e.g. `https://script.google.com/macros/s/.../exec`).
5. Use that URL as `VITE_APP_SCRIPT_URL` in `.env.local` (local) and as the GitHub Actions secret `APP_SCRIPT_URL` (production).

Emails use the same theme as the website (primary blue, slate, Inter-style layout).
