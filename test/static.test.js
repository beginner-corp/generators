const test = require('tape')
const staticGenerator = require('../src/static')

test('Static generator exists', t => {
  t.plan(1)
  t.ok(staticGenerator, 'Static generator exists')
  t.end()
})
