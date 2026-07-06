# Korous Design

Portfolio webpage for a UI/UX designer.

## Development

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Contact form

The contact form posts to `/.netlify/functions/send-email`.

### Gmail setup

1. In the new Gmail account, enable 2-Step Verification.
2. Open Google Account -> Security -> App passwords.
3. Create an app password for Mail. Google will show a 16-character password.
4. In Netlify, open Site configuration -> Environment variables.
5. Add these variables:

```bash
SMTP_SERVICE=gmail
SMTP_USER=your-new-gmail-address@gmail.com
SMTP_PASS=your-16-character-google-app-password
MAIL_FROM=your-new-gmail-address@gmail.com
MAIL_TO=daniel@korous.design
```

`SMTP_PASS` must be the Google app password, not the normal Gmail password. Keep the same values in local `.env.local` only for local testing; do not commit real secrets.

### Generic SMTP

For a non-Gmail SMTP provider, use this shape instead:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-smtp-user@example.com
SMTP_PASS=your-smtp-password-or-app-password
MAIL_FROM=your-smtp-user@example.com
MAIL_TO=daniel@korous.design
```
