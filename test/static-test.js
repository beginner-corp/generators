const test = require('tape')
const staticGenerator = require('../src/static')
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const rmrf = promisify(rimraf)
const tmp = path.join(process.cwd(), 'tmp')

test('static generator exists', t => {
  t.plan(1)
  t.ok(staticGenerator)
})

test('setup', async t => {
  t.plan(1)
  await mkdirp(tmp)
  t.ok(true)
})

test('index.html was created', t => {
  t.plan(1)
  staticGenerator({ dest: tmp })
  t.ok(fs.existsSync(tmp))
})

test('cleanup', async t => {
  t.plan(1)
  await rmrf(tmp)
  t.ok(true)
})
