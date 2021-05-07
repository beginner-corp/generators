module.exports = function ({ model, plural, hashkey, rest }) {
  return `
let layout = require('@architect/views/layout')
let form = require('@architect/views/${model}-form')
let ${plural} = require('@architect/shared/${plural}')
let arc = require('@architect/functions')

exports.handler = arc.http.async(list)

async function list () {
  let result = await ${plural}.list()
  let ul = result.map(${model}=> \`<li><a href=/${plural}/\${ ${model}.${hashkey} }>\${ ${model}.${rest[0].name} }</a>\`).join('')
  return {
    html: layout(\`${form()}<ul>${ul}</ul>\`)
  }
}`
}
