const test = require('tape')
const staticGenerator = require('../src/static')
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const { remove } = require('fs-extra')
const stat = promisify(fs.stat)
const rmrf = promisify(rimraf)

test('Static generator exists', t => {
  t.plan(1)
  t.ok(staticGenerator, 'Static generator exists')
  t.end()
})

test('Index.html was created', async t => {
  // create a tmp directory
  addTmp(t)

  // run staticGenerator
  staticGenerator({dest: './tmp'})

  // assert that the file was copied

  // A `public` directory with the contents of `index.html` should be created
  let tmpPath = path.join(__dirname, '..', 'tmp')
  let stats = await stat(tmpPath)
  console.log(stats)


  t.plan(1)
  t.ok(stats.isDirectory())

  removeTmp(t)

  t.end()
})


async function addTmp(t) {
  try {
    await mkdirp('./tmp')
  } catch (err) {
    t.end(err)
  }
}

async function removeTmp(t) {
  try {
    await rmrf('./tmp')
  } catch (err) {
    t.end(err)
  }
}
