const colors = require('colors')
const pwdGen = require('password-generator')

const {
  encrypt,
  decrypt
} = require('./crypto')
const db = require('./db')

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
        pwd: encrypt(record.pwd, record.key),
        username: record.username,
        group: record.group
      })
      .write()

    process.stdout.write('\033c')
    console.log(`\n > Password stored! `.bgGreen.white)
  } else {
    process.stdout.write('\033c')
    console.log(`\n > Error, the identifier already exists! `.bgRed.white)
  }
}

// Print the list of Records
const list = () => {
  const groups = db.get('groups').value()
  console.log()
  groups.forEach(name => {
    console.log(` ${name.green.bold}`)
    let val = db.get('records')
      .filter({ group: name })
      .sortBy('id')
      .value()
      val.forEach(record => {
        console.log(`  └── ${record.id.cyan}`)
      })
  })
}

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
      console.log(`\n > Wrong decrytion key! `.bgRed.white)
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

// Create new Group
const group = (name) => {
  db.get('groups')
    .push(name)
    .write()
  console.log(`\n > Group created! `.bgGreen.white)
}

// Generate a Password
const generate = (length) => {
  console.log(`\n > The password is: ${pwdGen(length, false).black} `.bgGreen.white)
}

// Delete a Record
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

// Update a Record
const update = (record) => {
  var newField = ((color) => {
    switch (record.field) {
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
  })(record.field);

  var updateRecord = db.get('records')
    .find({ id: record.id })
    .assign(newField)
    .write()

  if (!newField) {
    console.log(`\n > There\'s no group with this name! `.bgRed.white)
    return
  }
  
  if (updateRecord.id === undefined) {
    console.log(`\n > Wrong identifier! `.bgRed.white)
  } else {
    console.log(`\n > ${record.field.charAt(0).toUpperCase() + record.field.slice(1)} updated! `.bgGreen.white)
  }
}

module.exports = {
  create,
  list,
  read,
  group,
  generate,
  remove,
  update
}