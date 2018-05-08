require('colors')
const db = require('../utils/db')

const remove = (nick) => {
  var deletePwd = db.get('records')
    .remove({ id: nick })
    .write()
  if (deletePwd.length === 0) {
    console.log(`\n > Wrong identifier! `.bgRed.white)
  } else {
    console.log(`\n > Password deleted! `.bgGreen.white)
  }
}

module.exports = remove
