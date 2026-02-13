# Daniel Ramirez - Personal Portfolio

A high-performance personal portfolio built with Astro and React.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **UI Components:** [React](https://reactjs.org/) (Interactive Islands)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [DaisyUI](https://daisyui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🏗️ Architecture

This project follows the **Astro Island Architecture**:
- Static content is rendered using Astro components (`.astro`).
- Interactive elements are built as React components (`.tsx`) and hydrated as islands.

### Folder Structure

- `src/components/astro/`: Static, non-interactive components.
- `src/components/react/`: Interactive "island" components.
- `src/layouts/`: Core page layouts.
- `src/pages/`: Astro pages and routes.
- `src/content/`: Data collections (projects, blog posts).
- `src/lib/`: Shared logic and utilities.
- `src/styles/`: Global styles and Tailwind configuration.
- `src/types/`: TypeScript type definitions.

## 🛠️ Development

### Prerequisites

- [pnpm](https://pnpm.io/) (Recommended package manager)

### Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📄 License

MIT
