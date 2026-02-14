# Agent Instructions — `src/` Directory

> **Scope:** These rules apply to every file created or modified inside `src/`. They complement the root `AGENTS.md` and the detailed docs in `.agent/docs/`.

---

## 1. Rendering Decision Model

```
Need client-side state or event listeners?
├── NO  → .astro component  (zero JS shipped)
└── YES → .tsx component     (React island, hydrated)
```

**Golden rule:** Default to Astro. Only reach for React when interactivity is _impossible_ without it.

---

## 2. Folder Structure (Enforced)

```
src/
├── components/
│   ├── astro/      # Static components (.astro only)
│   └── react/      # Interactive islands (.tsx only)
├── layouts/        # Page shells (BaseLayout.astro)
├── pages/          # File-based routing (.astro)
├── content/        # Astro Content Collections
├── lib/            # Shared helpers & utilities
├── styles/         # global.css (Tailwind + DaisyUI entry)
└── types/          # TypeScript type definitions
```

### Placement Rules

| What you're building | Goes in | Extension |
|---|---|---|
| Static UI (cards, footers, navbars) | `components/astro/` | `.astro` |
| Interactive UI (forms, accordions, toggles) | `components/react/` | `.tsx` |
| Page route | `pages/` | `.astro` |
| Layout wrapper | `layouts/` | `.astro` |
| Shared logic / helpers | `lib/` | `.ts` |
| Type definitions | `types/` | `.ts` |
| Structured data (projects, posts) | `content/` | `.json` / `.md` |

> **Never** place a `.tsx` file in `components/astro/` or a `.astro` file in `components/react/`.

---

## 3. Component Authoring

### Astro Components

- Keep them purely presentational — no client-side JS.
- Accept data via Astro props (`Astro.props`) or content collection queries.
- Use semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
- Each component should have a **single responsibility**.

### React Components (Islands)

- **Must be** functional components with Hooks.
- Export a single default component per file.
- Keep islands as **small and focused** as possible — hydrate only the interactive slice, not the wrapper.
- Never introduce React Context or global state unless explicitly requested.
- Prefer props over context for data flow.
- Use `lucide-react` for icons (already in the dependency tree).

---

## 4. Hydration Directives

Use the **lightest** directive that satisfies the requirement:

| Directive | When to use | Example |
|---|---|---|
| `client:visible` | Component below the fold or non-critical | Timeline items, project filters |
| `client:idle` | Needed soon, but not blocking first paint | Theme toggle in navbar |
| `client:load` | Critical for initial experience | **Rare** — use only when justified |

### Hydration Anti-Patterns

- ❌ `client:load` on layout wrappers or navigation shells.
- ❌ Hydrating static text, headers, footers, or content cards.
- ❌ Wrapping an entire page section in a single React island.

---

## 5. Styling Rules

### Stack: Tailwind CSS v4 + DaisyUI v5

- **Utility-first only.** Style with Tailwind classes on the markup.
- **DaisyUI components** (`btn`, `card`, `badge`, etc.) are the base for common UI elements — customize with Tailwind utilities on top.
- **Consistent spacing:** Use Tailwind's default spacing scale — don't invent custom values.
- Custom CSS in `global.css` is allowed **only** for animations or effects that cannot be expressed as utilities (e.g., `@keyframes`).

### Prohibited

- Inline `style` attributes (unless binding a dynamic CSS variable from a prop).
- CSS Modules, Styled Components, or any other styling paradigm.
- Creating additional `.css` files outside of `styles/global.css` without explicit approval.

### Design Tokens (Current Project Aesthetic)

- **Glassmorphism:** `bg-base-200/50 backdrop-blur-sm border border-base-content/5`
- **Ambient glow orbs:** `blur-3xl opacity-20` with gradient fills.
- **Text gradients:** `bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent` — reserve for key emphasis.
- **Hero typography:** Extreme scale (`text-6xl`–`text-8xl`), `font-black`, `tracking-tighter`.
- **Monospace accents:** For dates and technical metadata.

---

## 6. Pages & Layouts

- Every page **must** use `<BaseLayout>` from `layouts/BaseLayout.astro`.
- Handle meta tags (title, description, Open Graph) via `BaseLayout` props — never in individual pages.
- Maintain a logical heading hierarchy: one `<h1>` per page, followed by `<h2>`, `<h3>`, etc.
- Use Astro's file-based routing — do not create custom routing logic.

---

## 7. Content & Data

- Use **Astro Content Collections** for structured content (projects, blog posts, etc.).
- Every collection must have a **typed schema** via Zod or Astro's `defineCollection`.
- Never hardcode large datasets in component files — load from `content/`.
- Import paths use the `@/*` alias (mapped to `src/*`).

---

## 8. TypeScript

- **Strict mode** is enforced (`"strict": true` in `tsconfig.json`).
- Define shared types in `types/` and import them where needed.
- Props interfaces for React components must be explicitly typed — no `any`.
- Use `@/*` path alias instead of fragile relative paths when crossing directory boundaries.

---

## 9. Performance Budget

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Client-side JS | Minimal — only from hydrated islands |
| Time to Interactive | As fast as possible |

### Rules

- Prefer static rendering. Every `.astro` page ships zero JS by default — don't break that.
- Avoid heavy runtime libraries. Evaluate bundle impact before adding any dependency.
- Use Astro's built-in `<Image />` component (backed by `sharp`) for optimized images.
- Use `@vercel/analytics` and `@vercel/speed-insights` for production monitoring (already installed).

---

## 10. Decision Priority Stack

When choosing between approaches, follow this priority order:

1. **Simplicity** over complex abstraction.
2. **Performance** over unnecessary flexibility.
3. **Astro** over React.
4. **Composition** over configuration.
5. **Static content** over dynamic fetching.

---

## 11. Anti-Patterns Checklist

Before committing any change, verify:

- [ ] No React component was created when Astro could have handled it.
- [ ] No `client:load` was used without strong justification.
- [ ] No new npm dependency was added without evaluating bundle size impact.
- [ ] No inline `style` attributes exist (unless for dynamic CSS vars).
- [ ] No global state management was introduced without explicit approval.
- [ ] No hardcoded data exists in component files — it belongs in `content/`.
- [ ] No layout or navigation wrapper was hydrated.
- [ ] No premature abstraction was introduced.

---

## 12. Accessibility (Mandatory)

- All interactive elements must be **keyboard navigable**.
- Images require meaningful `alt` text.
- Color contrast must meet WCAG AA standards.
- Use ARIA attributes appropriately — prefer native HTML semantics first.
- Focus indicators must be visible on all focusable elements.

---

## 13. Quick Reference — New Feature Checklist

When adding a new feature to the portfolio:

1. **Decide:** Can it be static? → Astro. Needs interactivity? → React island.
2. **Place:** Put the file in the correct `components/astro/` or `components/react/` directory.
3. **Hydrate:** Choose the lightest directive (`client:visible` > `client:idle` > `client:load`).
4. **Style:** Use Tailwind + DaisyUI utilities. Follow the existing design tokens.
5. **Type:** Add TypeScript interfaces in the component or in `types/`.
6. **Layout:** Ensure the page uses `BaseLayout` and has proper meta tags.
7. **Verify:** Check Lighthouse score hasn't degraded. Run `pnpm build` before considering it done.
