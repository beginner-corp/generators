module.exports = function ({ model, plural}) {
  return `
let layout = require('@architect/views/layout')
let form = require('@architect/views/${model}-form')
let ${plural} = require('@architect/shared/${plural}')
let arc = require('@architect/functions')

exports.handler = arc.http.async(list)

async function list (req) {
  let post = await posts.read(req.params.postID)
  return {
    html: layout(form(post))
  }
}`
}
