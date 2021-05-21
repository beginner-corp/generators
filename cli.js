#! /usr/bin/env node
const path = require('path')
const mkdirp = require('mkdirp')
const auth = require('./src/auth')
const mvc = require('./src/mvc')
const tmp = path.join(process.cwd(), 'tmp')
var argv = require('yargs/yargs')(process.argv.slice(2)).argv

if (require.main === module) {
  (async function main (){
    await cli()
  })()
}

module.exports = cli


async function cli () {
  console.log('praise cage', argv)
  console.log('(%d, %d)')
  if (argv.auth) {
    await mkdirp(tmp)
    await auth({ dest: tmp })
  }

  if (argv.mvc) {
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
