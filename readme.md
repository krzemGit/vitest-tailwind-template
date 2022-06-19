# Vite Template

Vite template with env setup for Vite, tailwind and vitests

## Env info

The environment consists of:

- Vite
- Tailwind
- Vitest

## Installation commands

<!-- Vite app -->

`npm create vite@latest my-react-app -- --template react`
`npm install`

<!-- Taiwind -->

`npm install -D tailwindcss postcss autoprefixer`
`npx tailwind init`

<!-- config files -->

create `postcss.config.js` like that:
`module.exports = { plugins: { tailwindcss: {}, autoprefixer: {}, }, };`

<!-- vitest -->

`npm install -D vitest`
