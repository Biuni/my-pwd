require('colors')
const db = require('../utils/db')
const { encrypt } = require('../utils/crypto')

const create = (record) => {
  var checkExist = db.get('records')
    .find({ id: record.id })
    .value()

  if (checkExist === undefined) {
    db.get('records')
      .push({
        id: record.id,
        email: record.email,
        pwd: encrypt(record.pwd, record.key),
        username: record.username,
        group: record.group
      })
      .write()
    console.log(`\n > Password stored! `.bgGreen.white)
  } else {
    console.log(`\n > Error, the identifier already exists! `.bgRed.white)
  }
}

module.exports = create
