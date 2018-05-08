require('colors')
const db = require('../utils/db')

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

module.exports = list
