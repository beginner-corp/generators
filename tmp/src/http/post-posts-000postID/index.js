let arc = require('@architect/functions')
let posts = require('@architect/shared/post')

exports.handler = arc.http.async(update)

async function update (req) {
  await post.update(req.body)
  return { location: '/post' }
}