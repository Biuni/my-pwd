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
const exportDb = require('./commands/export')

const createPrompt = require('./prompt/createPrompt')
const updatePrompt = require('./prompt/updatePrompt')
const updatePwdPrompt = require('./prompt/updatePwdPrompt')
const readPrompt = require('./prompt/readPrompt')

const version = require('../package.json').version

program
  .version(version, '-v, --version')
  .description('Easy and secure CLI to store and manage your passwords.')

program
  .command('new')
  .description('Store credentials into safely place.')
  .action(() => {
    prompt(createPrompt).then(input => create(input))
  })

program
  .command('list')
  .description('Show all records stored.')
  .action(type => list(type))

program
  .command('read')
  .description('Copy the password of a stored record. Use "--show" if you want to view the password.')
  .option('--show', 'Show the password in the console.')
  .action(options => {
    console.log((options.show) ? '> Attention! The password will be show after insert the key.\n  Be careful that no one looks at the screen!\n'.yellow : '')
    prompt(readPrompt).then(input => read(input, options.show))
  })

program
  .command('group <name>')
  .option('--remove', 'Remove group (and its elements will be hidden from the list)')
  .description('Create a new group. Use "--remove" to remove one.')
  .action((name, options) => {
    (options.remove) ? groupRemove(name) : group(name)
  })

program
  .command('generate <length>')
  .description('Generate a secure password on your device.')
  .action(length => generate(length))

program
  .command('remove <identifier>')
  .description('Remove a record.')
  .action(identifier => remove(identifier))

program
  .command('update <field>')
  .description('Update a field. You can use: email, pwd, username, group. Example: "my-pwd update pwd"')
  .action(field => {
    var promptList = (field === 'pwd') ? updatePwdPrompt : updatePrompt
    prompt(promptList).then(input => update(field, input))
  })

program
  .command('export')
  .description('Exports the JSON file containing the database')
  .action(type => exportDb(type))

program.parse(process.argv)
