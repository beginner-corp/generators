// const fs = require('fs')
// const promisify = require('util').promisify
// const path = require('path')
const test = require('tape')
// const rimraf = require('rimraf')
// const mkdirp = require('mkdirp')
const mvc = require('../src/mvc')
// const rmrf = promisify(rimraf)
// const tmp = path.join(process.cwd(), 'tmp')

test('exists', t => {
  t.plan(1)
  t.ok(mvc)
})

/*
test('setup', async t=> {
  t.plan(1)
  await mkdirp(tmp)
  t.ok(true)
})

test('index.html was created', async t => {
  t.plan(1)
  staticGenerator({dest: tmp})
  t.ok(fs.existsSync(tmp))
})

test('cleanup', async t=> {
  t.plan(1)
  await rmrf(tmp)
  t.ok(true)
})*/

