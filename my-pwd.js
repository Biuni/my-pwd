#!/usr/bin/env node

require('colors')
const program = require('commander')
const { prompt } = require('inquirer')

const create = require('./commands/create')
const list = require('./commands/list')
const read = require('./commands/read')
const { group, groupRemove } = require('./commands/group')
const generate = require('./commands/generate')
const remove = require('./commands/remove')
const update = require('./commands/update')

const createPrompt = require('./prompt/createPrompt')
const updatePrompt = require('./prompt/updatePrompt')
const updatePwdPrompt = require('./prompt/updatePwdPrompt')
const readPrompt = require('./prompt/readPrompt')

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
    console.log('> Attention! The password will be show after insert the key.\n  Be careful that no one looks at the screen!'.red)
    prompt(readPrompt).then(input => read(input))
  })

program
  .command('group <name>')
  .option('--remove', 'Remove group (and its elements will be hidden from the list)')
  .description('')
  .action((name, options) => {
    (options.remove) ? groupRemove(name) : group(name)
  })

program
  .command('generate <length>')
  .description('')
  .action(length => generate(length))

program
  .command('remove <id>')
  .description('')
  .action(id => remove(id))

program
  .command('update <field>')
  .description('')
  .action(field => {
    var promptList = (field === 'pwd') ? updatePwdPrompt : updatePrompt
    prompt(promptList).then(input => update(field, input))
  })

program.parse(process.argv)
