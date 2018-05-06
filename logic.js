const colors = require('colors')

const login = (pwd) => {
  console.log(pwd)
}

const create = (answers) => {
  console.log(answers)
}

const list = () => {
  console.log('list')
}

const read = () => {
  console.log('read')
}

const group = () => {
  console.log('group')
}

const generate = () => {
  console.log('generate')
}

const remove = () => {
  console.log('remove')
}

const update = () => {
  console.log('update')
}

module.exports = {
  login,
  create,
  list,
  read,
  group,
  generate,
  remove,
  update
}