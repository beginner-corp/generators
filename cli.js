#! /usr/bin/env node
const path = require('path')
const mkdirp = require('mkdirp')

const auth = require('./src/auth')
const mvc = require('./src/mvc')
const static = require('./src/static')

const argv = require('yargs/yargs')(process.argv.slice(2))
  .usage('Welcome to the Architect Generator Beta')
  .command('mvc', 'generates mvc example')
  .command('auth', 'generates auth example')
  .command('static', 'generates static example')
  .options({
    'd': {
      alias: 'dest',
      demandOption: false,
      default: './',
      describe: 'destination path',
      type: 'string'
    }
  })
  .help('help').alias('help', 'h')
  .argv


if (require.main === module) {
  (async function main (){
    await cli()
  })()
}

module.exports = cli


async function cli () {

  console.log('Welcome to the Architect Generator Beta \nrun this command with --help to see info')

  if (argv._[0] === 'auth') {
    let tmp = path.join(process.cwd(), argv.dest)
    await mkdirp(tmp)
    await auth({ dest: tmp })
    console.log('created auth example')
  }

  if (argv._[0] === 'mvc') {
    let tmp = path.join(process.cwd(), argv.dest)
    await mkdirp(tmp)
    await mvc({
      dest: tmp,
      model: 'post',
      hashkey: 'postID',
      plural: 'posts',
      rest: [ { name: 'title', type: 'string' }, { name: 'content', type: 'text' } ]
    })
    console.log('created mvc example')
  }

  if (argv._[0] === 'static') {
    let tmp = path.join(process.cwd(), argv.dest)
    await mkdirp(tmp)
    await static({ dest: tmp })
    console.log('created static example')
  }


}
