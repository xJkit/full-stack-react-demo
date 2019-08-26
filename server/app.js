// const express = require('express');
import express from 'express';
import morgan from 'morgan';
import path from 'path';

import fs from 'fs';

// react
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from 'client/src/App';

const app = express();
const REACT_BUILD_PATH = path.resolve(__dirname, '../client/build');

app.use(morgan('combined'));
app.use(express.static(REACT_BUILD_PATH));

app.get('/', (req, res) => {
  res.send('Hello, Express Root');
})

app.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/react', (req, res) => {
  console.log('get');
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
    )
  })
})

app.listen(5000, () => {
  console.log('express is running at port 5000...')
})