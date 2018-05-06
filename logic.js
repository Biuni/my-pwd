const colors = require('colors')
const pwdGen = require('password-generator')

const db = require('./db')

const login = (pwd) => {
  console.log(pwd)
}

// Create new Record
const create = (record) => {
  var checkExist = db.get('records')
    .find({ id: record.id })
    .value()

  if (checkExist === undefined) {
    db.get('records')
      .push({
        id: record.id,
        email: record.email,
        pwd: record.pwd,
        username: record.username,
        group: record.group
      })
      .write()
      console.log(`\nAll right!`.green)
  } else {
    console.log(`\nError! Change the identifier.!`.red)
  }
}

// Print the list of Records
const list = () => {
  const groups = db.get('groups').value()
  console.log()
  groups.forEach(name => {
    console.log(` ${name.green}`)
    let val = db.get('records')
      .filter({ group: name })
      .sortBy('id')
      .value()
      val.forEach(record => {
        console.log(`  └── ${record.id.cyan}`)
      })
  })
}

const read = () => {
  console.log('read')
}

// Create new Group
const group = (name) => {
  db.get('groups')
    .push(name)
    .write()
}

// Generate a Password
const generate = (length) => {
  console.log(`\nThe password is: ${pwdGen(length, false).green}`)
}

// Delete a Record
const remove = (nick) => {
  db.get('records')
    .remove({ id: nick })
    .write()
}

// Update a Record
const update = (nick, field, value) => {
  var newField = ((color) => {
    switch (field) {
      case 'email':
        return { email: value }
      case 'pwd':
        return { pwd: value }
      case 'username':
        return { username: value }
      case 'group':
        return { group: value }
      default:
        return { id: nick }
    }
  })(field);

  db.get('records')
    .find({ id: nick })
    .assign(newField)
    .write()
}

module.exports = {
  login,
  create,
  list,
  read,
  group,
  generate,
  remove,
  update
}