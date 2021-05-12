const arcfile = require('../src/mvc/mutate/arcfile')
const addRoute = arcfile.addRoute
const addTable = arcfile.addTable
const test = require('tape')

test('exists', t => {
  t.plan(1)
  t.ok(addRoute)
})

test('adds a route', t => {
  const tokens = [
    { type: 'pragma', value: 'app', line: 1, column: 1 },
    { type: 'pragma', value: 'http', line: 4, column: 1 },
  ]
  const expected = [
    { type: 'pragma', value: 'app', line: 1, column: 1 },
    { type: 'pragma', value: 'http', line: 4, column: 1 },
    { type: 'string', value: 'get' },
    { type: 'space', value: ' ' },
    { type: 'string', value: 'posts' },
    { type: 'newline', value: '\n' }
  ]

  t.deepEquals(addRoute( { tokens, verb: 'get', path: 'posts' } ), expected)
  t.end()
})


test('adds a table', t => {
  const tokens = [
    { type: 'pragma', value: 'app', line: 1, column: 1 },
    { type: 'pragma', value: 'tables', line: 4, column: 1 },
  ]
  const expected = [
    { type: 'pragma', value: 'app', line: 1, column: 1 },
    { type: 'pragma', value: 'tables', line: 4, column: 1 },
    { type: 'string', value: 'Shawn' },
    { type: 'newline', value: '\n' },
    { type: 'space', value: ' ' },
    { type: 'space', value: ' ' },
    { type: 'string', value: '555555' },
    { type: 'space', value: ' ' },
    { type: 'string', value: '*String' },
    { type: 'newline', value: '\n' },
    { type: 'newline', value: '\n' }
  ]

  t.deepEquals(addTable({ tokens, name: 'Shawn', hashkey: '555555' }), expected)
  t.end()
})
