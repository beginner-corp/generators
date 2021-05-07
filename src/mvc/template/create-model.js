module.exports = function ({ plural }) {
  return `let arc = require('@architect/functions')
let posts = require('@architect/shared/${plural}')

exports.handler = arc.http.async(create)

async function create (req) {
  await ${plural}.create(req.body)
  return { location: '/${plural}' }
}`
}
