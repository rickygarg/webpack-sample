const path = require('path');

module.exports = {
  entry: ['@test/main-component', '@test/other-component'] ,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};