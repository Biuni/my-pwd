const readPrompt = [
  {
    type: 'input',
    name: 'id',
    message: 'Enter the identifier: '
  },
  {
    type: 'password',
    name: 'key',
    mask: '*',
    message: 'Enter the decryption key: '
  }
]

module.exports = readPrompt
