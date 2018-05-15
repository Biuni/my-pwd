require('colors')
const path = require('path')
const homedir = require('os').homedir()
const fs = require('fs-extra')
const desktop = path.join(homedir, 'Desktop')

const exportDb = () => {
  try {
    fs.copySync(path.resolve(__dirname, '../utils/db.json'), `${desktop}/my-pwd-database.json`)
    console.log(`\n > The database was save on : '${desktop}' with the name 'my-pwd-database.json' `.bgGreen.black)
  } catch (err) {
    console.log(`\n > Error! Something went wrong: ${err} `.bgRed.white)
  }
}

module.exports = exportDb
