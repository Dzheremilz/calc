const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { calc } = require('./calc')

// demander l'operation
const op = readlineSync.question('Operation: ');
// demander le premier nombre
const nb1 = readlineSync.questionInt('nb1: ');
// demander le second nombre
const nb2 = readlineSync.questionInt('nb2: ');


console.log(chalk.bgCyanBright.black.bold(calc(op, nb1, nb2)))

