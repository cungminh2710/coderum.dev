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

- `coderum-dev`: a [Next.js](https://nextjs.org/) app
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

## Contributing Guideline

### Make a code change

All daily code changes happen on lightweight, short-lived feature branches. This way of working is called trunk-based development; the `main` branch is the default trunk.

- To create a branch:

1. Open the command line and navigate to the repository.

2. Change to the **main** branch by running:

```bash
git checkout main
```

3. Update your local **main** branch by running:

```bash
git pull origin main
```

4. Create a new branch from **main**

```bash
git checkout -b <your-branch-name>

git checkout -b minhc-a-branch
```

### Pull Request

A pull request (PR) lets you inform others about changes you’ve made and pushed to a branch in a GitHub repository and invite the appropriate reviews. After opening your PR, you can discuss your changes and receive feedback from owners and interested stakeholders.

#### Pull request trains

When your changes have many components and are too big to review, splitting them into multiple smaller pull requests is better. This will help code reviewers understand your changes better.

In a PR train, you base each PR on the previous PR, with the head PR based on `main`.

![image](https://user-images.githubusercontent.com/8063319/183367402-6282a3e8-c15d-4254-b11b-8f66560bb1c4.png)

So, our merge direction is: `master <- A <- B <- C`

![image](https://user-images.githubusercontent.com/8063319/183367595-837dc283-378b-4af8-bfa1-f323c1a537ad.png)

There are two strategies to sync a PR train, `git merge` and `git rebase`

#### Create Pull Request

You’ve created a branch for your changes and tested your changes locally, and things are looking good. You now need to push your changes to the remote repository.

```bash
git push origin <your-branch-name>
```

You can open a PR in multiple ways, depending on your computer’s operating system and the technology you use (for example, a CLI or GitHub Desktop).

1. **PR Title**

Your PR title (probably the final commit message of your PR on master) should indicate what components your commit primarily affects (for example, the packages). It should be easily understandable and provide enough information for someone to know what to expect from the code changes in the PR without actually having to dive into the code.

_Some examples of bad titles include:_

- soft fail
- add swiftfile
- rm storyboard

None of these titles adequately explain the changes or indicate the affected packages.

_Some example good titles include:_

- PD-365: Improve Worldmap
- chore(docs): Add Contributing guideline
- IOS-347: Story component

These titles include the affected package, a precise explanation of the changes, and, where relevant, the corresponding Jira ticket number.

_Some standard title formats that teams use include:_

- `[JIRA-999] <description>` - this will link PR status to our JIRA automatically
- `feat(lang): add Polish language` - this follows common [commit conventional](https://www.conventionalcommits.org/en/v1.0.0/)

2. **PR Description**

The description should give reviewers the context to effectively review the PR.

A good description includes:

- **Overview**: A brief summary of your PR (think TL;DR).
- **Problem**: The problem you’re trying to fix.
- **Solution**: Explains your solution, as well as other possible solutions, and why you chose the one you did. If there’s a design doc, include a link to it.
- **Preview**: Any GIFs or screenshots if applicable.
- **PR train**: The PR train details if using one.
- **Jira ticket link**: A link to the Jira ticket if available.

Once entered the appropriate title and description, click "Create Pull Request"

#### Status Check

Once the PR is reviewed, click Enable Auto-merge to run the necessary CI checks to validate before merging.

#### Your PR is reviewed and merged!

Congratulations 🎉🎉 The Coderum team thanks you ✨.

Once your PR is merged, your contributions will be publicly visible and we will tag the appropriate version to deploy your changes

