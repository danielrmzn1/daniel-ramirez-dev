# Development & Deployment

This document covers developer experience standards and deployment procedures.

## Developer Experience

To ensure a clean and efficient development process, the following standards must be maintained:

- **TypeScript Strict Mode:** The project MUST be configured with `"strict": true` in `tsconfig.json`.
- **Path Aliases:** Use path aliases (e.g., `@/components`) for clean and maintainable import statements.
- **Clean Import Structure:** Keep imports organized and free of unnecessary or circular dependencies.
- **Fast Local Dev Startup:** The local development server (`astro dev`) should start quickly. Avoid adding dependencies or configurations that slow it down.

## Deployment

- **Target Platform:** All deployments must target **Vercel**.
- **Build Command:** The build process is executed with `astro build`. Ensure it runs cleanly without errors.
- **Production Build:** The production build must be optimized for performance.
- **Zero Console Errors:** The deployed application must not have any console errors or warnings in the browser.
