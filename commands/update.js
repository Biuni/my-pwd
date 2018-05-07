const colors = require('colors')
const db = require('../utils/db')
const { encrypt } = require('../utils/crypto')

const update = (field, record) => {
  var newField = ((color) => {
    switch (field) {
      case 'email':
        return { email: record.value }
      case 'pwd':
        return { pwd: encrypt(record.value, record.key) }
      case 'username':
        return { username: record.value }
      case 'group':
        return (db.get('groups').value().includes(record.value)) ? { group: record.value } : false
      default:
        return { id: record.id }
    }
  })(field)

  var updateRecord = db.get('records')
    .find({ id: record.id })
    .assign(newField)
    .write()

  if (!newField) {
    console.log(`\n > There's no group with this name! `.bgRed.white)
    return
  }

  if (updateRecord.id === undefined) {
    console.log(`\n > Wrong identifier! `.bgRed.white)
  } else {
    console.log(`\n > ${field.charAt(0).toUpperCase() + field.slice(1)} updated! `.bgGreen.white)
  }
}

module.exports = update
