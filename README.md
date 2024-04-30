# coderum.dev

Monorepo of Blogging Platform for Coder

## What's inside?

### Tech stack

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/) - Library for web
- [Next.js](https://nextjs.org/) - The React framework for full stack development
- [Storybook](https://storybook.js.org/) - Frontend workshop for UI development
- [libSQL](https://turso.tech/libsql) - fork of SQLite for scaling edge databases

This monorepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `coderum-dev`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

Some additional tools and utilities:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Contributing

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

To develop a app and its dependencies, run the following command:

```
pnpm dev --filter=<app-name>...

pnpm dev --filter=@repo/ui...
```
