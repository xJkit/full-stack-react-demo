const path = require('path');
const fs = require('fs');

fs.readFile(
  path.resolve(__dirname, '.babelrc'),
  'utf8',
  (err, babelConfig) => {
    if (err) {
      throw new Error('readFile error: ', err);
    }
    require('ignore-styles');
    require('@babel/polyfill');
    require('@babel/register')(Object.assign({}, JSON.parse(babelConfig), {
      ignore: [/(node_modules)/],
    }));
    require('./app');
  }
)