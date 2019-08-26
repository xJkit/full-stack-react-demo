// const express = require('express');
import express from 'express';
const app = express();

app.get('*', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('express is running at port 3000...')
})