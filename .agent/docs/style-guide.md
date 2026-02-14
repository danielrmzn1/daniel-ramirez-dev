# Style Guide

This document defines the styling rules for the project, emphasizing a utility-first approach.

## Styling Rules

- **Utility-First:** Use **Tailwind CSS** for all styling. Avoid writing custom CSS files unless absolutely necessary for a complex, non-standard component.
- **UI Primitives:** Use **DaisyUI** components as a base for common UI elements like buttons, cards, and forms. Customize them with Tailwind utilities as needed.
- **Consistent Spacing:** Adhere to Tailwind's default spacing scale to maintain visual consistency.
- **No Custom CSS (Almost):** Only write custom CSS (`.css` files) as a last resort.

## Prohibited

- **Inline Styles:** Do not use the `style` attribute on HTML elements unless it's for dynamic properties that cannot be handled by Tailwind classes (e.g., setting a CSS variable from a component prop).
- **Mixing Paradigms:** Do not mix different styling approaches (e.g., CSS Modules, Styled Components) with the established Tailwind CSS workflow.
