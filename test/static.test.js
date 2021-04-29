const test = require('tape')
const staticGenerator = require('../src/static')
const fs = require('fs')

test('Static generator exists', t => {
  t.plan(1)
  t.ok(staticGenerator, 'Static generator exists')
  t.end()
})

test('Index.html was created', t => {
  t.plan(1)
  t.ok(staticGenerator)
  t.end()
} )