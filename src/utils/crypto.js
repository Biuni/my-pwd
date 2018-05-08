const crypto = require('crypto')

const encrypt = (pwd, key) => {
  var cipher = crypto.createCipher('aes192', key)
  var crypted = cipher.update(pwd, 'utf8', 'hex')
  crypted += cipher.final('hex')
  return crypted
}

const decrypt = (pwd, key) => {
  var decipher = crypto.createDecipher('aes192', key)
  var dec = decipher.update(pwd, 'hex', 'utf8')
  dec += decipher.final('utf8')
  return dec
}

module.exports = {
  encrypt,
  decrypt
}
