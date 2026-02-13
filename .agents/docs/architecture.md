# Architecture

This document outlines the core architectural principles, folder structure, and component design patterns for the project.

## Core Architectural Principles

### 1. Astro-First Rendering Model

**Default rule:**
- 👉 If it can be static → use **Astro**
- 👉 If it needs state/interactivity → use a **React island**

**Decision tree:**
- Does the component require client-side state or event listeners?
  - **NO** → Build as an Astro component (`.astro`).
  - **YES** → Build as a React component (`.tsx`) and hydrate it as an island.

**Avoid:**
- Converting static Astro components into React components unnecessarily.
- Hydrating an entire page with `client:load`.

### 2. Island Architecture Rules

**Allowed hydration strategies:**
- `client:visible` (Preferred): Hydrates the component when it enters the viewport.
- `client:idle`: Hydrates the component after the main thread is free.
- `client:load`: Use ONLY if the component's interactivity is essential for the initial page experience.

**Never hydrate:**
- Main navigation or layout wrappers.
- Static text sections, headers, or footers.
- Static project cards or content displays.

### 3. Performance Budget

**Goals:**
- Ship minimal JavaScript to the client.
- Achieve a fast Time to Interactive (TTI).
- Maintain a Lighthouse performance score above 95.

**Agent actions:**
- Prefer static rendering with Astro wherever possible.
- Avoid runtime-heavy libraries.
- Minimize the bundle size by using code-splitting and efficient dependencies.

## Folder Structure (Strict)

The project follows a strict folder structure:

```
src/
├── components/
│   ├── astro/      # Static, non-interactive components
│   └── react/      # Interactive "island" components
├── layouts/        # Core page layouts (e.g., BaseLayout.astro)
├── pages/          # Astro pages and routes
├── content/        # Data collections (e.g., projects, blog posts)
├── lib/            # Shared logic, helpers, and utilities
├── styles/         # Global styles and Tailwind configuration
└── types/          # TypeScript type definitions
```

## UI Architecture

### Component Philosophy
- **Small & Composable:** Build small components with a single responsibility.
- **No Monoliths:** Avoid creating large, complex components that do multiple things.

### Layout Strategy
- **Base Layout:** Use a single `BaseLayout.astro` for a consistent page structure.
- **Section Containers:** Abstract common page sections into reusable container components.
- **Grid Patterns:** Create reusable grid components for consistent layouts.

## React Usage Rules

React is to be used **ONLY** for components that require client-side interactivity.

**Permitted use cases:**
- Interactive filtering or sorting UI.
- UI elements with dynamic client-side state (e.g., accordions, tabs).
- State-driven animations.
- Theme toggles or other user preference controls.
- Advanced UI logic that cannot be handled by static Astro components.

**React components MUST:**
- Be functional components.
- Use Hooks for state and side effects.
- Avoid creating unnecessary context providers; prefer passing props for simpler cases.

## Content Strategy

- **Astro Content Collections:** Use Astro's built-in content collections for managing structured data like projects or blog posts.
- **Structured Data:** Ensure all content is strongly typed and follows a consistent schema.
- **No Hardcoded Data:** Avoid hardcoding large datasets directly within components. Load them from the `src/content/` directory.
