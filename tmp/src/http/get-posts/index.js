let layout = require('@architect/views/layout')
let form = require('@architect/views/post-form')
let posts = require('@architect/shared/posts.js')
let arc = require('@architect/functions')

exports.handler = arc.http.async(list)

async function list (req) {
  let post = await posts.read(req.params.postID)
  return {
    html: layout(form(post))
  }
}