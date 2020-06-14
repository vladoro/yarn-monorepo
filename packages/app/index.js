const chalk = require('chalk')
const dep1 = require('dep1');
const dep2 = require('dep2');

console.log(chalk.red('Hello App!'));
console.log(chalk.red(dep1()));
console.log(chalk.red(dep2()));
