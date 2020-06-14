const chalk = require('chalk')
const dep1 = require('dep1');
const dep2 = require('dep2');

console.log(chalk.green('Hello service!'));
console.log(chalk.green(dep1()));
console.log(chalk.green(dep2()));
