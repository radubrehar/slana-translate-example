const package = require('../../package.json')

module.exports = function(command) {
  console.log('Translator version: ' + package.version)
};