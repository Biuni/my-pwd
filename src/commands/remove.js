require('colors')
const readline = require('readline')
const db = require('../utils/db')

const remove = (identifier) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question(`\n > If you remove a password there are no way to restore it.\n   Are you sure? (y/n) `.red, (answer) => {
    if (answer === 'y' || answer === 'Y') {
      var deletePwd = db.get('records')
        .remove({ id: identifier })
        .write()
      if (deletePwd.length === 0) {
        console.log(`\n > Wrong identifier! `.bgRed.white)
      } else {
        console.log(`\n > Password deleted! `.bgGreen.white)
      }
      rl.close()
    } else {
      console.log(`\n > Deleting aborted! `.bgRed.white)
      rl.close()
    }
  })
}

module.exports = remove
