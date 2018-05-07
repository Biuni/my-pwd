const colors = require('colors')
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
      console.log(`Identifier: ${readPwd[0].id.bgGreen.white}`)
      console.log(`Email: ${readPwd[0].email.bgGreen.white}`)
      console.log(`Password: ${clearPwd.bgGreen.white}`)
      console.log(`Username: ${readPwd[0].username.bgGreen.white}`)
      console.log(`Group: ${readPwd[0].group.bgGreen.white}`)
    }
  }
}

module.exports = read
