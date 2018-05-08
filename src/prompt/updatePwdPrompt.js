const updatePwdPrompt = [
  {
    type: 'input',
    name: 'id',
    message: 'Enter identifier: ',
    validate: (value) => {
      var notEmpty = value !== ''
      if (!notEmpty) {
        return 'This field is required'
      } else {
        return true
      }
    }
  },
  {
    type: 'password',
    name: 'value',
    mask: '*',
    message: 'Enter new password: ',
    validate: (value) => {
      var notEmpty = value !== ''
      if (!notEmpty) {
        return 'This field is required'
      } else {
        return true
      }
    }
  },
  {
    type: 'password',
    name: 'key',
    mask: '*',
    message: 'Enter encryption key: ',
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

module.exports = updatePwdPrompt
