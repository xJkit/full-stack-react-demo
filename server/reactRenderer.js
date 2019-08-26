// react render middleware
import fs from 'fs';
import path from 'path';
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from 'client/src/App';

const router = express.Router();
const REACT_BUILD_PATH = path.resolve(__dirname, '../client/build');

router.use(reactRenderer);

export default router;

function reactRenderer(req, res, next) {
  fs.readFile(`${REACT_BUILD_PATH}/index.html`, 'utf8', (err, htmlData) => {
    if (err) {
      throw new Error('readFile error: ', err);
    }
    const ReactRoot = renderToString(<App />);
    res.send(
      htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactRoot}</div>`
      )
    );
    next();
  });
}