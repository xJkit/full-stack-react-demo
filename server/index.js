const path = require('path');
const fs = require('fs');

fs.readFile(
  path.resolve(__dirname, '.babelrc'),
  'utf8',
  (err, babelConfig) => {
    if (err) {
      throw new Error('readFile error: ', err);
    }
    require('@babel/register')(JSON.parse(babelConfig));
    require('./app');
  }
)