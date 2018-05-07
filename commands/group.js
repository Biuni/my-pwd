require('colors')
var readline = require('readline')
const db = require('../utils/db')

const group = (name) => {
  db.get('groups')
    .push(name)
    .write()
  console.log(`\n > Group created! `.bgGreen.white)
}

const groupRemove = (name) => {
  if (name === 'Business' || name === 'Personal') {
    console.log(`\n > Personal and Business groups was settled as default! `.bgRed.white)
    return
  }
  var checkExist = db.get('groups').value()
  if (!checkExist.includes(name)) {
    console.log(`\n > There's no group with this name! `.bgRed.white)
    return
  }
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question(`\n > If you remove a group all its elements will be hidden from the list.\n   Are you sure? (y/n) `.red, (answer) => {
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
