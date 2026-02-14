# Agent Instructions: Personal Portfolio

This project is a high-performance personal portfolio built with Astro and React. The primary goal is to create a fast, modern website that showcases advanced frontend engineering practices, prioritizing static-first rendering and minimal client-side JavaScript.

## Core Technologies

The following technologies are strict constraints:

- **Primary Framework:** Astro
- **UI Components:** React (for interactive islands only)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with DaisyUI
- **Deployment:** Vercel

## Development

- **Run Locally:** Use `pnpm dev` (or your preferred package manager) to start the Astro development server.
- **Local URL:** The project runs at [http://localhost:4321](http://localhost:4321).

## Detailed Guidelines

For specific instructions, refer to the documents in the `.agents/docs/` directory:

- **[Architecture](./.agents/docs/architecture.md):** Core principles, folder structure, and component design.
- **[Style Guide](./.agents/docs/style-guide.md):** Rules for using Tailwind CSS and DaisyUI.
- **[Development & Deployment](./.agents/docs/development.md):** DX standards and Vercel deployment procedures.
- **[Best Practices](./.agents/docs/best-practices.md):** Decision-making, SEO, accessibility, and anti-patterns.
- **[Scaffolding Guide](./.agents/docs/scaffolding.md):** Initial pages and components to create.

## Custom Constraints

- **Vercel Deployments:** NEVER trigger a Vercel deployment (preview or production) unless the user explicitly and clearly requests it. This is to manage deployment resources and costs.

## About Page Design Language

The `about.astro` page implements a specific "Modern Engineering Portfolio" aesthetic that should be maintained:

- **Typography:**
  - Hero headers use extreme scale (`text-6xl` to `text-8xl`), heavy weight (`font-black`), and tight tracking (`tracking-tighter`) for impact.
  - Body text uses a comfortable reading size (`text-xl`) with relaxed leading.
  - Monospace fonts are used sparingly for dates and technical metadata to reinforce the engineering theme.

- **Layout & Structure:**
  - **Asymmetric Grid:** Uses a `grid-cols-12` system where content takes ~7 columns and metadata/decoration takes ~5 columns.
  - **Sticky Sidebar:** Technical skills and certifications are kept in view using `sticky top-24` for better scanability during long scrolls.
  - **Timeline Component:** Experience is presented in a connected vertical timeline with interactive accordion states (using React islands for smooth height animation).

- **Visual Effects:**
  - **Glassmorphism:** Secondary content boxes use `bg-base-200/50 backdrop-blur-sm` with thin borders (`border-base-content/5`) to create depth without heaviness.
  - **Ambient Backgrounds:** Large, blurred, low-opacity gradient orbs (`blur-3xl`, `opacity-20`) provide subtle background movement and depth.
  - **Gradients:** Text gradients (`bg-gradient-to-r from-primary to-secondary`) are reserved for key emphases like "SCALABLE".
