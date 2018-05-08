require('colors')
const db = require('../utils/db')
const { decrypt } = require('../utils/crypto')

const read = (record) => {
  let clearPwd
  var readPwd = db.get('records')
    .filter({ id: record.id })
    .value()

  if (readPwd.length === 0) {
    console.log(`\n > Wrong identifier! `.bgRed.white)
  } else {
    try {
      clearPwd = decrypt(readPwd[0].pwd, record.key)
    } catch (err) {
      clearPwd = false
    }
    if (!clearPwd) {
      console.log(`\n > Wrong decryption key! `.bgRed.white)
    } else {
      console.log()
      console.log(' ~ Identifier '.inverse + '  ' + readPwd[0].id.green)
      console.log(' ~ Email      '.inverse + '  ' + readPwd[0].email.green)
      console.log(' ~ Username   '.inverse + '  ' + readPwd[0].username.green)
      console.log(' ~ Password   '.inverse + '  ' + clearPwd.green)
      console.log(' ~ Group      '.inverse + '  ' + readPwd[0].group.green)
    }
  }
}

module.exports = read
