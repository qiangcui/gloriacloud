# Contact form proxy (optional)

The contact form now submits **directly to Google Apps Script** via a hidden iframe (no CORS issues), so **you don’t need this worker** for gloriacloud.com.

This folder is kept only in case you want a CORS proxy for another use. For the main site, set the GitHub Actions secret **`APP_SCRIPT_URL`** to your **Apps Script** URL (same as `.env.local`). See `appscript/README.md`.
