// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript()

module.exports.exportPathMap = function() {
  return {
    '/': { page: '/' }
  }
};
