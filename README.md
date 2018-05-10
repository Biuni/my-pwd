# :lock: my-pwd
![Dependency](https://david-dm.org/Biuni/my-pwd.svg)
![Downloads](https://img.shields.io/npm/dt/my-pwd.svg)
![License](https://img.shields.io/npm/l/my-pwd.svg)

Easy and secure CLI to store and manage your passwords.

![Console](https://i.imgur.com/2zovIjU.gif)

## Why?
Nowadays every people in the world have thousand of password and pin to remember. It's impossible to do with only our memory and use the notes to store them it's not safe. So how do I remember its? A good way is use a password manager. The best way is use a **CLI password manager** like *my-pwd*. Fast, easy and secure.

## Install
```sh
$ npm install -g my-pwd
```

## Getting Start
Nothing to configure. Install the NPM package and you are ready to store your information in a safely place. Digit `my-pwd new` to create new credentials record or digit `my-pwd -h` if you want to view all the avaiable commands.

## How does it works? 
The script save all the credentials in a JSON file encrypted by *Advanced Encryption Standard*. AES uses a key to create an unreadable hash. This key must be entered by you. Yes, its similar to remember a password but **if you use one encryption key to store all credentials you can forget all the others password and remember only one.**

## Security
The script run locally, **its NEVER send nothing across internet** and the dependencies are all up to date and secure. Moreover the possibility to crack AES is inifity small, if you want to know more you can read [this answer](https://crypto.stackexchange.com/a/6828).

## Commands
```
Options:

  -v, --version           Output the version number
  -h, --help              Output usage information

Commands:

  new                     Store credentials into safely place.
  list                    Show all records stored.
  read [options]          Copy to clipboard the password of a stored record. Use "--show" if you want to view the password in the console.
  group [options] <name>  Create a new group. Use "--remove" to remove one.
  generate <length>       Generate a secure password on your device.
  remove <identifier>     Remove a record.
  update <field>          Update a field. You can use: email, pwd, username, group. Example: "my-pwd update pwd"
```

## Roadmap
  - Use [treeify](https://github.com/notatestuser/treeify) to print list
  - Support to multi languages
  - Command to export database
  - Use [chalk](https://github.com/chalk/chalk) instead of [color.js](https://github.com/Marak/colors.js)
  - Use AES with 256 bits instead of 192.
  - *...continuously updated*