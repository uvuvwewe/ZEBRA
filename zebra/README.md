# Example Create Next App with Tailwind and Typescript

This is a create-next-app (CNA) example/template to use whenever you want
to *quickly* start a CNA from scratch with Tailwind CSS and Typescript

### How to use
#### Using create-next-app
Execute `create-next-app` with npm or yarn to bootstrap the example:

```shell
# use yarn (preferred)
yarn create next-app --example https://github.com/beatzball/create-next-tailwind-example-app
# or use degit
npx degit https://github.com/beatzball/create-next-tailwind-example-app
# or npx
npx create-next-app --example https://github.com/beatzball/create-next-tailwind-example-app
```

#### Install it and run:
```shell
# yarn (preferred)
yarn
yarn dev
# or if you must use npm
npm install
npm run dev
```

## Includes
- example base page
- a few example components
    - button (component and default color styles)
    - input
- example theming w/ dark mode

### Notes
1. Typescript by default
2. Uses [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
    - takes advantage of JIT for quick style compilation
        - only compile what's being used
        - `caveat`: you must declare style names explicitly
            - no dynamic classnames allowed
            - ex: `bg-${color}-900` won't work
            - ex: `${color === 'blue' ? 'bg-blue-900' : 'bg-rose-900'}`
    - Purges unused CSS for optimized production builds
