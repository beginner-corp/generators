const test = require('tape')
const getIndex = require('../src/mvc/template/get-index')

test('getIndex exists', t => {
  t.plan(1)
  t.ok(getIndex)
})

test('get index returns string', t => {
  const expected = `
  let layout = require('@architect/views/layout')

  exports.handler = async function http(req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: layout(\`<a href = /posts>posts</a >\`)
  }
}`
  t.plan(1)
  t.deepEquals(getIndex({ 'plural': 'posts' }), expected)
})
