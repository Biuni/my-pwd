const updatePrompt = [
  {
    type: 'input',
    name: 'id',
    message: 'Enter identifier: '
  },
  {
    type: 'input',
    name: 'field',
    message: 'Enter field to update: '
  },
  {
    type: 'input',
    name: 'value',
    message: 'Enter new value: '
  },
  {
    type: 'input',
    name: 'key',
    message: 'Enter an encryption key (only if you update password): '
  }
]

module.exports = updatePrompt
