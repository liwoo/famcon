# Welcome to FamCon Remix 📀!

-   🌟 FamCon: Your Ultimate WhatsApp Assistant for Family Welfare Contributions!

-   🚀 No More Headaches: Bid farewell to those pesky manual calculations! 🧮

-   🔔 Stay Updated, Not Annoyed: Forget about those nagging reminders. FamCon keeps you effortlessly informed. 📲

-   💸 Track Contributions Like a Boss: With FamCon, you're always in the know. No contribution slips through the cracks. 💪

-   🎉 Simplify Your Family Finances: FamCon is here to streamline your contributions, keeping your family welfare game strong and stress-free. 🌈

## Technologies Used

-   🎶 [Remix Framework](https://remix.run): A [react](https://react.dev/)-based meta-framework for building modern web apps, that forces you to think like a PHP dev 🌐🛠️
-   💧 [Drizzle ORM](https://orm.drizzle.team/): A type-safe, [Typescript](https://www.typescriptlang.org/) ORM for your favorite SQL flavor, that forces you to actually write SQL. 🗃️🔗
-   🌊 [ShadCDN](https://ui.shadcn.com/): [Tailwind](https://www.typescriptlang.org/)-based UI toolkit for building applications that look like 2024. 🎨🔧
-   ✅ [Conform](https://conform.guide/integration/remix): Tool for crafting and handling web forms. 📝🌐
-   🔍 [Zod](https://zod.dev/): Library for airtight data validation. 📊👀
-   🏃 [Vitest](https://vitest.dev/): Framework for unit testing like a boss. 🧪💻
-   🧩 [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro): For testing React components like a pro. 🚀📚
-   🎭 [Playwright](https://playwright.dev/): For end-to-end UI Testing, making sure it's all smooth. 🖥️🔍
-   📊 [SQLite](https://www.sqlite.org/): Minimalistic database for development and testing. 💾🛠️

## Development

Make sure you have Remix installed:

```sh
npm install -g remix
```

Then install your dependencies:

```sh
npm install
```

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

-   `build/`
-   `public/build/`
