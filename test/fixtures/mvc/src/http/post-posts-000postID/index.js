let arc = require('@architect/functions')
let posts = require('@architect/shared/posts')

exports.handler = arc.http.async(update)

async function update (req) {
  await posts.update(req.body)
  return { location: '/posts' }
}
