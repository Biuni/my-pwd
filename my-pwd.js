#!/usr/bin/env node

const program = require('commander')
const { prompt } = require('inquirer')

const {
  login,
  create,
  list,
  read,
  group,
  generate,
  remove,
  update
} = require('./logic')

const {
  createPrompt
} = require('./prompt')

program
  .version('1.0.0', '-v, --version')
  .description('Easy and secure way to store your password.')

program
  .command('login <password>')
  .description('')
  .action(pwd => login(pwd))

program
  .command('create')
  .description('')
  .action(() => {
    prompt(createPrompt).then(input => create(input))
  })

program
  .command('list')
  .description('')
  .action(list())

program
  .command('read <nick>')
  .description('')
  .action(nick => read(nick))

program
  .command('group <name>')
  .description('')
  .action(name => group(name))

program
  .command('generate <length>')
  .description('')
  .action(length => generate(length))

program
  .command('remove <nick>')
  .description('')
  .action(nick => remove(nick))

program
  .command('update <nick>')
  .description('')
  .action(nick => update(nick))

program.parse(process.argv)