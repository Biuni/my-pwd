const db = require('./db')

const createPrompt = [
  {
    type: 'input',
    name: 'email',
    message: 'Enter email: '
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter username: '
  },
  {
    type: 'input',
    name: 'pwd',
    message: 'Enter password: '
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter identifier: ',
    validate: function (value) {
      var valid = !value.match(/\s/)
      return valid || 'No blank space'
    }
  },
  {
    type: 'list',
    name: 'group',
    message: 'Enter group: ',
    choices: db.get('groups').value()
  }
]

module.exports = {
  createPrompt
}
