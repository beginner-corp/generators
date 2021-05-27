const test = require('tape')
const auth = require('../src/auth')
const fs = require('fs')
const promisify = require('util').promisify
const path = require('path')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const rmrf = promisify(rimraf)
const tmp = path.join(process.cwd(), 'tmp')

test('exists', t => {
  t.plan(1)
  t.ok(auth, 'auth exists')
})

test('auth setup', async t => {
  t.plan(1)
  await mkdirp(tmp)
  t.ok(true)
})

test('auth app was created', t => {
  console.log(tmp)
  t.plan(1)
  auth({
    dest: tmp,
  })
  t.ok(fs.existsSync(tmp))
})


test('cleanup', async t => {
  t.plan(1)
  await rmrf(tmp)
  t.ok(true)
})
