const arcfile = require('../src/mvc/mutate/arcfile')
const addRoute = arcfile.addRoute
const test = require('tape')

test('exists', t => {
  t.plan(1)
  t.ok(addRoute)
})

test.only('adds a route', t => {
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
  
})