var translate = require('google-translate-api');
var chalk = require('chalk');

module.exports = function(command) {
  const options = command.options;

  if (!options.from) {
    console.log();
    console.log('Doing automatic input source language detection.');
    console.log();
  }

  if (!options.to) {
    throw new Error('No --to option is specified');
  }

  if (!options.text) {
    throw new Error('No --text option is specified');
  }

  console.log(chalk.green('Translating:'));
  console.log(options.text);

  translate(options.text, { to: options.to, from: options.from })
    .then(res => {
      if (!options.from) {
        console.log();
        console.log(chalk.green('Detected language: ') + res.from.language.iso);
        console.log();
      }
      console.log(chalk.green('Translation:'));
      console.log(chalk.blue(res.text));
      console.log();
    })
    .catch(err => {
      console.error(err);
    });
};
