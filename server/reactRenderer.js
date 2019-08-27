// react render middleware
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import App from 'client/src/App';

const REACT_BUILD_PATH = path.resolve(__dirname, '../client/build');

export default function reactRenderer(req, res, next) {
  const routes = [
    '/',
    '/about',
    '/contact',
  ];
  const isMatchedRoute = routes.find(route => matchPath(req.originalUrl, {
    path: route,
    exact: true,
  }));
  if (!isMatchedRoute) {
    return next();
  }

  fs.readFile(`${REACT_BUILD_PATH}/index.html`, 'utf8', (err, htmlData) => {
    if (err) {
      throw new Error('readFile error: ', err);
    }
    let context = {};
    const ReactRoot = renderToString(
      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        <App />
      </StaticRouter>
    );

    res.send(
      htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactRoot}</div>`
      )
    );

  });
}