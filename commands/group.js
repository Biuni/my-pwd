const colors = require('colors')
var readline = require('readline')
const db = require('../utils/db')

const group = (name) => {
  db.get('groups')
    .push(name)
    .write()
  console.log(`\n > Group created! `.bgGreen.white)
}

const groupRemove = (name) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question(`\nAre you sure? (y/n) `, (answer) => {
    if (answer === 'y' || answer === 'Y') {
      db.get('groups')
        .pull(name)
        .write()
      console.log(`\n > Group deleted! `.bgGreen.white)
      rl.close()
    } else {
      console.log(`\n > Deleting aborted! `.bgRed.white)
      rl.close()
    }
  })
}

module.exports = { group, groupRemove }
