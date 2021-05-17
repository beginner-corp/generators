module.exports = function ({ model, plural, hashkey }) {
  return `let layout = require('@architect/views/layout')
let form = require('@architect/views/${model}-form')
let ${model} = require('@architect/shared/${model}.js')
let arc = require('@architect/functions')

exports.handler = arc.http.async(list)

async function list (req) {
  let result = await ${model}.list()
  return {
    html: layout(form(result))
  }
}`
}
