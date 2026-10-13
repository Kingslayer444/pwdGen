# pwdGen

`@kingslayerchess/pwd-gen` generates random passwords. You can use it as a Node.js module or run it from the command line.

## Installation

```bash
npm install @kingslayerchess/pwd-gen
```

## CLI

Run the CLI with `npx`:

```bash
npx pwd-gen
```

By default, it generates a 12-character password with special characters. Use `--length` (or `-l`) to choose a different length:

```bash
npx pwd-gen --length 20
npx pwd-gen -l 24
```

To generate a password without special characters, pass `--no-special`:

```bash
npx pwd-gen --length 20 --no-special
```

Show all available options with:

```bash
npx pwd-gen --help
```

## Node.js module

```js
const generatePassword = require("@kingslayerchess/pwd-gen");

const password = generatePassword(20); // Special characters are included by default.
const passwordWithoutSpecialCharacters = generatePassword(20, false);
```
