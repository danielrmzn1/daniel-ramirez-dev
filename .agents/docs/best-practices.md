# Best Practices

This document outlines key best practices for decision-making, SEO, accessibility, and anti-patterns to avoid.

## AI Agent Decision Guidelines

When faced with a choice, prioritize the following:

- **Simplicity** over complex abstraction.
- **Performance** over unnecessary flexibility.
- **Astro** over React.
- **Composition** over configuration.
- **Static content** over dynamic fetching.

## SEO + Accessibility

- **Semantic HTML:** Use HTML5 elements according to their semantic meaning (e.g., `<nav>`, `<main>`, `<article>`).
- **Heading Hierarchy:** Ensure a logical and sequential heading structure (`<h1>`, `<h2>`, etc.) on every page.
- **Accessible Navigation:** All navigation elements must be accessible and clearly structured.
- **Keyboard Navigable:** All interactive elements must be fully operable using only a keyboard.
- **Meta Tags:** Handle all page-level meta tags (title, description) and Open Graph tags through the main layout file (`BaseLayout.astro`).

## Anti-Patterns (DO NOT DO)

- **Over-hydrating:** Do not hydrate an entire layout or page. Only hydrate small, interactive "islands."
- **React for Everything:** Do not turn all components into React components. Default to Astro.
- **Adding Dependencies:** Do not add new dependencies without careful consideration of their impact on performance and bundle size.
- **Premature Abstraction:** Avoid creating complex abstractions before they are clearly needed.
- **Over-engineered State:** Do not introduce global state management unless it is absolutely necessary and has been explicitly requested.
