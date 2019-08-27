# Full-stack universal rendering example for React app

> Only for demo purpose. Do not use in production.

This repo is a JavaScript universal rendering example for express on the server side and react on the client side.

## Client-side rendering (CSR)

* [create-react-app](https://github.com/facebook/create-react-app) - no need to eject
* [react-router-dom](https://github.com/ReactTraining/react-router)

## Server-side rendering (SSR)

* [express.js](https://github.com/expressjs/express) - must-have node.js web server
* [react](https://github.com/facebook/react) - render react app on server-side
* [babel](https://github.com/babel/babel) - use latest JavaScript features both on server and client side
* [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) - use **Yarn** to manage this monorepo

## Guides

Use **yarn** to install both `server` and `client` packages at the project root:

```sh
yarn install
```

Build the client side react application:

```sh
cd client && yarn run build
```

Now, it's ready to run the server and make the **server-side-rendering** to happen:

```sh
cd server && yarn run start
```

You will see the express server run on *port 5000* and the web app built on top of create-react-app.


The following routes are server-side rendered by default:
* `/`
* `/about`
* `/contact`

## References
* [Making CRA apps work with SSR](https://medium.com/@zhirzh/making-cra-apps-work-with-ssr-part-1-1e23d6b1603d)
* [Upgrading a create-react-app project to a SSR + code splitting setup](https://medium.com/bucharestjs/upgrading-a-create-react-app-project-to-a-ssr-code-splitting-setup-9da57df2040a)
* [Awesome Universal Rendering](https://github.com/brillout/awesome-universal-rendering)
* [Server-side rendering with create-react-app, code-splitting, preloaded data, React Router, Helmet, Redux, and Thunk](https://medium.com/@cereallarceny/server-side-rendering-in-create-react-app-with-all-the-goodies-without-ejecting-4c889d7db25e)