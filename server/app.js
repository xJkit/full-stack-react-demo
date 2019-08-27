// const express = require('express');
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import reactRender from './reactRenderer';

const REACT_BUILD_PATH = path.resolve(__dirname, '../client/build');
const app = express();

app.use(reactRender);
app.use(express.static(REACT_BUILD_PATH));
app.use(morgan('combined'));
app.listen(5000, () => {
  console.log('express is running at port 5000...')
})