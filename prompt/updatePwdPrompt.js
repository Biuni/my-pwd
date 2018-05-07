const updatePwdPrompt = [
  {
    type: 'input',
    name: 'id',
    message: 'Enter identifier: '
  },
  {
    type: 'password',
    name: 'value',
    mask: '*',
    message: 'Enter new password: '
  },
  {
    type: 'password',
    name: 'key',
    mask: '*',
    message: 'Enter encryption key: '
  }
]

module.exports = updatePwdPrompt
