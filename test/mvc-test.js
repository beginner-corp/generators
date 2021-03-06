const fs = require('fs')
const promisify = require('util').promisify
const path = require('path')
const test = require('tape')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const mvc = require('../src/mvc')
const rmrf = promisify(rimraf)
const tmp = path.join(process.cwd(), 'tmp')

test('mvc exists', t => {
  t.plan(1)
  t.ok(mvc)
})

test('mvc setup', async t => {
  t.plan(1)
  await mkdirp(tmp)
  t.ok(true)
})

test('mvc app was created', t => {
  console.log(tmp)
  t.plan(1)
  mvc({
    dest: tmp,
    model: 'post',
    hashkey: 'postID',
    plural: 'posts',
    rest: [ { name: 'title', type: 'string' }, { name: 'content', type: 'text' } ]
  })
  t.ok(fs.existsSync(tmp))
})

test('cleanup', async t => {
  t.plan(1)
  await rmrf(tmp)
  t.ok(true)
})
