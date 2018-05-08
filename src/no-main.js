require('colors')

const message = `
Looks like you're trying to require/import \`my-pwd\`.
This module doesn't actually expose a NodeJS interface.
This module's just the CLI for \`my-pwd\`.`.red.trim()

console.log(message)

module.exports = message
