const readPrompt = [
  {
    type: 'input',
    name: 'id',
    message: 'Enter the identifier: ',
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
    message: 'Enter the decryption key: ',
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

module.exports = readPrompt
