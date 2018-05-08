require('colors')
const clipboardy = require('clipboardy')
const db = require('../utils/db')
const { decrypt } = require('../utils/crypto')

const read = (record, show) => {
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
      clipboardy.writeSync(clearPwd)
      var displayPwd = (show) ? clearPwd.green : '> copied to clipboard!'.yellow
      console.log()
      console.log(' ~ Identifier '.inverse + '  ' + readPwd[0].id.green)
      console.log(' ~ Email      '.inverse + '  ' + readPwd[0].email.green)
      console.log(' ~ Username   '.inverse + '  ' + readPwd[0].username.green)
      console.log(' ~ Password   '.inverse + '  ' + displayPwd)
      console.log(' ~ Group      '.inverse + '  ' + readPwd[0].group.green)
      console.log((show) ? '\n > Password copied to clipboard!'.yellow : '')
    }
  }
}

module.exports = read
