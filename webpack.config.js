const path = require('path');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    fs: 'empty',
    ['/Users/lala/Desktop/vitalAi/haley-js-mock-browser/lib-vital/vitalservice-js/domains']: 'empty',
    request: 'empty',
  }
};