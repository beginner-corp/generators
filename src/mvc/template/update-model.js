module.exports = function ({ model }) {
  return `let arc = require('@architect/functions')
let posts = require('@architect/shared/${model}')

exports.handler = arc.http.async(update)

async function update (req) {
  await ${model}.update(req.body)
  return { location: '/${model}' }
}`
}
