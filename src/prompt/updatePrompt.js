const updatePrompt = [
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
    type: 'input',
    name: 'value',
    message: 'Enter new value: ',
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

module.exports = updatePrompt
