#!/usr/bin/env node
const { program } = require('commander');
const generatePassword = require('./index.js');
const pkg = require('./package.json');

program
  .name('pwd-gen')
  .description(pkg.description)
  .version(pkg.version)
  .option('-l, --length <zahl>', 'Länge des Passworts', '12')
  .option('--no-special', 'Passwort ohne Sonderzeichen generieren')
  .parse(process.argv);

const options = program.opts();
const length = parseInt(options.length, 10);

const withSpecial = options.special;

if (isNaN(length) || length <= 0) {
  console.error('Fehler: Bitte gib eine gültige Zahl für die Länge an.');
  process.exit(1);
}

const pwd = generatePassword(length, withSpecial);
console.log(pwd);
