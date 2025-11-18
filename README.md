# Telegram Mini-App (Monetag Official Method) — Ready for Bolt AI

This package contains a Telegram Web App (mini-app) template tailored for Monetag's **Telegram Mini-App** integration.
It is prepared to be hosted on Bolt/Netlify/Vercel/GitHub Pages and used with a Telegram Bot (BotFather) for the `startapp` deep link.

## Files
- `index.html` — Main WebApp page (includes Telegram WebApp SDK).
- `script.js` — Initialization and button logic (replace placeholders).
- `style.css` — Simple Telegram-like styling.
- `README.md` — This file with deployment instructions.

## Quick Steps to deploy (Bolt AI)
1. Unzip and upload the folder to Bolt AI (https://bolt.new or your Bolt dashboard) as a new web app.
2. Bolt will provide a secure HTTPS domain, e.g. `https://yourapp.bolt.run`.

## BotFather — set domain for your bot
1. Open Telegram and start **@BotFather**
2. Send `/setdomain` to BotFather and follow prompts.
3. Enter the Bolt-hosted domain (the one Bolt gave you), for example:
   ```
   https://yourapp.bolt.run
   ```
   This links your bot to the hosted mini-app.

## Create the Deep Link (example)
Replace `YourBot` and `yourapp` in the example below:
```
https://t.me/YourBot?startapp=yourapp
```
- `YourBot` = your bot username (without @)
- `yourapp` = the app name you used when creating the web app (BotFather will route it)

You can use this deep link to open the mini-app inside Telegram or provide it to Monetag.

## Monetag — Add Mini-App (Official Integration)
1. Login to Monetag publisher dashboard.
2. Go to **Monetization → Telegram Mini Apps** (or the area Monetag shows in UI).
3. Provide the WebApp URL or the deep link:
   - Prefer giving the `https://t.me/YourBot?startapp=yourapp` deep link if Monetag asks for Telegram Mini-App format.
   - Alternatively, give the Bolt-hosted URL if Monetag accepts hosted webapps.
4. Wait for Monetag approval (they may validate the link). Fix any deep link format issues if Monetag asks.

## Monetag Script
If Monetag provides a JS script snippet, paste it inside `index.html` near the bottom before `</body>`.
Example placeholder (do NOT use this fake link):
```html
<script async src="https://syndication.realsrv.com/splash.php?id=YOUR_ID"></script>
```

## Replace placeholders in `script.js`
- `botUsername` in the COPY LINK section
- `appName` in the COPY LINK section
- `MONETAG_LINK` top variable with your Monetag link (or deep link)

## Testing
- After hosting on Bolt, open the hosted URL in a browser to check visuals.
- Use the deep link inside Telegram: `https://t.me/YourBot?startapp=yourapp` to open inside Telegram.
- If Telegram WebApp isn't available, the page still works as a normal web page.

## Notes & Troubleshooting
- Monetag often requires exact deep link format; ensure `?startapp=` parameter is present.
- If Monetag rejects a plain `t.me/username` link, use the `t.me/YourBot?startapp=yourapp` deep link or the hosted HTTPS URL.
- Make sure your Bolt/hosting URL is HTTPS (Bolt provides HTTPS by default).
- Contact Monetag support if they request extra verification.

-- End of README
