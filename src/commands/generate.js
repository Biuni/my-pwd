require('colors')
const pwdGen = require('password-generator')
const clipboardy = require('clipboardy')

const generate = (length) => {
  var newPwd = pwdGen(length, false)
  clipboardy.writeSync(newPwd)
  console.log(`\n > The password is: ${newPwd.black} `.bgGreen.white)
  console.log('\n > Password copied to clipboard!'.yellow)
}

module.exports = generate
