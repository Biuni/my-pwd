const colors = require('colors')
const pwdGen = require('password-generator')

const generate = (length) => {
  console.log(`\n > The password is: ${pwdGen(length, false).black} `.bgGreen.white)
}

module.exports = generate
