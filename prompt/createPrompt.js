const db = require('../utils/db')

const createPrompt = [
  {
    type: 'input',
    name: 'email',
    message: 'Enter email: ',
    validate: (value) => {
      var valid = value.match(/\S+@\S+\.\S+/)
      return (valid) ? true : 'Insert a valid mail'
    }
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter username: '
  },
  {
    type: 'password',
    name: 'pwd',
    mask: '*',
    message: 'Enter password: '
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter identifier: ',
    validate: (value) => {
      var valid = !value.match(/\s/)
      var notEmpty = value !== ''
      if (!notEmpty) {
        return 'This field is required'
      } else if (!valid) {
        return 'No blank space'
      } else if (valid && notEmpty) {
        return true
      }
    }
  },
  {
    type: 'list',
    name: 'group',
    message: 'Enter group: ',
    choices: db.get('groups').value()
  },
  {
    type: 'password',
    name: 'key',
    mask: '*',
    message: 'Enter an encryption key: ',
    validate: (value) => {
      var notEmpty = value !== ''
      if (!notEmpty) {
        return 'This field is required'
      } else {
        return true
      }
    }
  }
]

module.exports = createPrompt
