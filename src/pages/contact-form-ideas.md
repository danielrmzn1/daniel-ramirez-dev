# Contact Form — Implementation Ideas

Ideas and approaches to make the contact form fully functional.

---

## Option 1: Astro Server Action + Resend

**How it works:** Use Astro's server-side capabilities with [Resend](https://resend.com/) (email API).

- Create an API route at `src/pages/api/contact.ts`.
- On form submit, POST to `/api/contact`.
- Server validates input, calls Resend API, returns JSON response.
- Free tier: 100 emails/day — more than enough for a portfolio.

**Pros:** Zero external infrastructure, stays within Astro, simple setup.
**Cons:** Requires a Resend API key (env var on Vercel).

---

## Option 2: Vercel Serverless Function

**How it works:** Deploy a serverless function alongside the Astro site.

- Create `api/contact.ts` in the project root (Vercel convention).
- Use Node's `fetch` or a library like `nodemailer` to send email.
- Works with any SMTP provider (Gmail, Outlook, SendGrid, etc.).

**Pros:** Full control, supports any email provider.
**Cons:** Slightly more setup, cold start latency.

---

## Option 3: Third-Party Form Service (No Backend)

**How it works:** Point the form `action` to a hosted service.

- **Formspree** (`formspree.io`) — free tier: 50 submissions/month.
- **Getform** (`getform.io`) — free tier: 50 submissions/month.
- **Web3Forms** (`web3forms.com`) — free, unlimited submissions.

**Pros:** Zero code changes on the backend, instant setup.
**Cons:** Dependency on external service, limited customization.

---

## Option 4: EmailJS (Client-Side Only)

**How it works:** Send emails directly from the browser using [EmailJS](https://www.emailjs.com/).

- Install `@emailjs/browser`.
- Configure a template on EmailJS dashboard.
- Call `emailjs.sendForm()` from the React component.
- Free tier: 200 emails/month.

**Pros:** No server needed at all, quick to set up.
**Cons:** API keys exposed client-side (public key only), limited templates.

---

## Recommended Approach

**Option 1 (Astro API route + Resend)** is the best fit for this project:

1. Stays within the Astro ecosystem — no extra infrastructure.
2. Resend has a generous free tier and excellent DX.
3. Server-side validation keeps the form secure.
4. One env var (`RESEND_API_KEY`) on Vercel is all that's needed.

### Rough Implementation Steps

1. `pnpm add resend`
2. Create `src/pages/api/contact.ts` with POST handler.
3. Validate fields server-side (name, email, message).
4. Call `resend.emails.send()` with a styled HTML template.
5. Return JSON `{ success: true }` or `{ error: "..." }`.
6. Update `ContactForm.tsx` to POST to `/api/contact` and handle responses.
7. Add `RESEND_API_KEY` to Vercel environment variables.
8. Re-enable form inputs and button.
