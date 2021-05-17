module.exports = function ({ plural }) {
  return `let arc = require('@architect/functions')
let posts = require('@architect/shared/${plural}')

exports.handler = arc.http.async(update)

async function update (req) {
  await ${plural}.update(req.body)
  return { location: '/${plural}' }
}`
}
