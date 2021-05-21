const test = require('tape')
const cli = require('../cli')

test('cli should exist', t => {
  t.plan(1)
  t.ok(cli, 'cli module exists')
})

test('cli console logs', t => {
  t.plan(1)
  t.assert(cli(), 'console logs')
})
