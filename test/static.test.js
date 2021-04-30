const test = require('tape')
const staticGenerator = require('../src/static')
const fs = require('fs')
const { promisify } = require('util')
const rimraf = require('rimraf')
const { remove } = require('fs-extra')

const mkdir = promisify(fs.mkdir)
const rmrf = promisify(rimraf)

test('Static generator exists', t => {
  t.plan(1)
  t.ok(staticGenerator, 'Static generator exists')
  t.end()
})

test('Index.html was created', async t => {
  // create a tmp directory
  let tmp = await mkdir('./tmp')

  // copy directory from src to tmp, run staticGenerator
  // assert that the file was copied


  t.plan(1)
  t.ok(staticGenerator)

  removeTmp()

  t.end()
})

async function removeTmp() {
  try {
    let success = await rmrf('./tmp')
    console.log(success)
  } catch (err) {
    throw err
  }
}