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

const createPrompt = require('./prompt')
const updatePrompt = require('./updatePrompt')
const readPrompt = require('./readPrompt')

program
  .version('1.0.0', '-v, --version')
  .description('Easy and secure way to store your password.')

program
  .command('create')
  .description('')
  .action(() => {
    prompt(createPrompt).then(input => create(input))
  })

program
  .command('list')
  .description('')
  .action(type => list(type))

program
  .command('read')
  .description('')
  .action(() => {
    prompt(readPrompt).then(input => read(input))
  })

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
  .command('update')
  .description('')
  .action(() => {
    prompt(updatePrompt).then(input => update(input))
  })

program.parse(process.argv)
