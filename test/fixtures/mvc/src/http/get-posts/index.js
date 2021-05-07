let layout = require('@architect/views/layout')
let form = require('@architect/views/post-form')
let posts = require('@architect/shared/posts')
let arc = require('@architect/functions')

exports.handler = arc.http.async(list)

async function list () {
  let result = await posts.list()
  let ul = result.map(post => `<li><a href=/posts/${post.postID}>${post.title}</a>`).join('')
  return {
    html: layout(`${form()}<ul>${ul}</ul>`)
  }
}
