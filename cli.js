#! /usr/bin/env node
const path = require('path')
const mkdirp = require('mkdirp')
const auth = require('./src/auth')
const mvc = require('./src/mvc')

// const tmp = path.join(process.cwd(), 'tmp')

const argv = require('yargs/yargs')(process.argv.slice(2))
  .usage('Welcome to the Architect Generator Beta')
  .help('help').alias('help', 'h')
  .command('mvc', 'generates mvc example')
  .command('auth', 'generates auth example')
  .showHelpOnFail(false, 'whoops, something went wrong! run with --help')
  .argv

if (require.main === module) {
  (async function main (){
    await cli()
  })()
}

module.exports = cli


async function cli () {

  if (argv._[0] === 'auth') {
    let tmp = path.join(process.cwd(), argv.dest)
    await mkdirp(tmp)
    await auth({ dest: tmp })
  }

  if (argv._[0] === 'mvc') {
    await mkdirp(tmp)
    await mvc({
      dest: tmp,
      model: 'post',
      hashkey: 'postID',
      plural: 'posts',
      rest: [ { name: 'title', type: 'string' }, { name: 'content', type: 'text' } ]
    })
  }
}
