module.exports = function ({ plural, hashkey }) {
  return `let ${plural} = require('@architect/shared/${plural}')
let arc = require('@architect/functions')

exports.handler = arc.http.async(destroy)

async function destroy (req) {
  await ${plural}.destroy(req.params.${hashkey})
  return {
    location: '/${plural}'
  }
}`
}
