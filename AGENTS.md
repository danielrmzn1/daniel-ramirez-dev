This project is a high-performance personal portfolio built with Astro and React. The primary goal is to create a fast, modern website that showcases advanced frontend engineering practices, prioritizing static-first rendering and minimal client-side JavaScript.

- **Production URL:** [https://daniel-ramirez.dev/](https://daniel-ramirez.dev/)

## Core Technologies

The following technologies are strict constraints:

- **Primary Framework:** Astro
- **UI Components:** React (for interactive islands only)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with DaisyUI
- **Deployment:** Vercel

- **Run Locally:** Use `pnpm dev` (or your preferred package manager) to start the Astro development server.
- **Local URL:** [http://localhost:4321](http://localhost:4321)

## Detailed Guidelines

For specific instructions, refer to the documents in the `.agent/docs/` directory:

- **[Architecture](./.agent/docs/architecture.md):** Core principles, folder structure, and component design.
- **[Style Guide](./.agent/docs/style-guide.md):** Rules for using Tailwind CSS and DaisyUI.
- **[Development & Deployment](./.agent/docs/development.md):** DX standards and Vercel deployment procedures.
- **[Best Practices](./.agent/docs/best-practices.md):** Decision-making, SEO, accessibility, and anti-patterns.
- **[Scaffolding Guide](./.agent/docs/scaffolding.md):** Initial pages and components to create.
- **[Git Standards](./.agent/docs/git.md):** Git workflow and standards for the project.

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
  - **Timeline Component:** Experience is presented in a connected vertical timeline with a controlled div-based accordion pattern (using React islands with `grid-template-rows` transitions for smooth height animation). Avoids native `<details>` to ensure consistent expand/collapse animations.

- **Visual Effects:**
  - **Glassmorphism:** Secondary content boxes use `bg-base-200/50 backdrop-blur-sm` with thin borders (`border-base-content/5`) to create depth without heaviness.
  - **Ambient Backgrounds:** Large, blurred, low-opacity gradient orbs (`blur-3xl`, `opacity-20`) provide subtle background movement and depth.
  - **Gradients:** Text gradients (`bg-gradient-to-r from-primary to-secondary`) are reserved for key emphases like "SCALABLE".
