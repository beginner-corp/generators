let path = require('path')
let fs = require('fs')
let { lexer } = require('@architect/parser')

// mutate the arcfile
function arcfile ({ dest }) {

  let app = path.join(dest, 'app.arc')
  let hidden = path.join(dest, '.arc')
  let raw = fs.readFileSync(fs.existsSync(app) ? app : hidden)
  let tokens = lexer(raw)

  tokens = addTable({ tokens })
  tokens = addRoute({ tokens, verb: 'post', path: `/login` })
  tokens = addRoute({ tokens, verb: 'post', path: `/register` })
  tokens = addRoute({ tokens, verb: 'get', path: `/admin` })
  tokens = addRoute({ tokens, verb: 'get', path: `/login` })
  tokens = addRoute({ tokens, verb: 'get', path: `/register` })
  tokens = addRoute({ tokens, verb: 'get', path: `/logout` })
  tokens = addRoute({ tokens, verb: 'get', path: `/` })

  fs.writeFileSync(fs.existsSync(app) ? app : hidden, serialize(tokens))
}

// helper to turn lexeme tokens back into a string
function serialize (tokens) {
  let s = ''
  for (let t of tokens) {
    s += (t.type === 'pragma' ? '@' : '') + t.value
  }
  return s
}

// helper for adding a route
function addRoute ({ tokens, verb, path }) {
  let found = tokens.findIndex(t => t.type === 'pragma' && t.value === 'http')
  tokens.splice(found + 2, 0, { type: 'string', value: verb })
  tokens.splice(found + 3, 0, { type: 'space', value: ' ' })
  tokens.splice(found + 4, 0, { type: 'string', value: path })
  tokens.splice(found + 5, 0, { type: 'newline', value: '\n' })
  return tokens
}

// helper for adding a table
// data
//   scopeID *String
//   dataID **String
//   ttl TTL
function addTable ({ tokens }) {
  let found = tokens.findIndex( t => t.type === 'pragma' && t.value === 'tables')
  tokens.splice(found + 2, 0, { type: 'string', value: 'data' })
  tokens.splice(found + 3, 0, { type: 'newline', value: '\n' })
  tokens.splice(found + 4, 0, { type: 'space', value: ' ' })
  tokens.splice(found + 5, 0, { type: 'space', value: ' ' })
  tokens.splice(found + 6, 0, { type: 'string', value: 'scopeID' })
  tokens.splice(found + 7, 0, { type: 'space', value: ' ' })
  tokens.splice(found + 8, 0, { type: 'string', value: '*String' })
  tokens.splice(found + 9, 0, { type: 'newline', value: '\n' })
  tokens.splice(found + 10, 0, { type: 'space', value: ' ' })
  tokens.splice(found + 11, 0, { type: 'space', value: ' ' })
  tokens.splice(found + 12, 0, { type: 'string', value: 'dataID' })
  tokens.splice(found + 13, 0, { type: 'space', value: ' ' })
  tokens.splice(found + 14, 0, { type: 'string', value: '**String' })
  tokens.splice(found + 15, 0, { type: 'newline', value: '\n' })
  tokens.splice(found + 16, 0, { type: 'space', value: ' ' })
  tokens.splice(found + 17, 0, { type: 'space', value: ' ' })
  tokens.splice(found + 18, 0, { type: 'string', value: 'ttl' })
  tokens.splice(found + 19, 0, { type: 'space', value: ' ' })
  tokens.splice(found + 20, 0, { type: 'string', value: 'TTL' })


  return tokens
}


arcfile.addRoute = addRoute
arcfile.addTable = addTable
arcfile.serialize = serialize

module.exports = arcfile
