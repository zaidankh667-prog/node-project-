## Vercel Deploy

This repository is now set up so Vercel can deploy it from the repository root.

### Before Deploy

Add these environment variables in Vercel if you want the contact form to work:

```env
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
MAIL_FROM=
CONTACT_RECIPIENTS=
NEXT_PUBLIC_BASE_URL=
```

### Vercel Settings

- Framework Preset: `Next.js`
- Root Directory: `/`
- Build Command: leave default or use `npm run build`

If you do not need the contact form yet, you can still deploy without SMTP variables. The site will load, but the contact API will return a configuration error until those values are added.
