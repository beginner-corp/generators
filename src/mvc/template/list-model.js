module.exports = function ({ model, plural }) {
  return `let layout = require('@architect/views/layout')
let form = require('@architect/views/${model}-form')
let ${plural} = require('@architect/shared/${plural}.js') 
let arc = require('@architect/functions')

exports.handler = arc.http.async(list)

async function list (req) {
  let ${model} = await ${plural}.read(req.params.${hashkey})
  return {
    html: layout(form(${model}))
  }
}`
}
