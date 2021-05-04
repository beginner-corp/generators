let arc = require('@architect/functions')
let posts = require('@architect/shared/posts')

exports.handler = arc.http.async(create)

async function create (req) {
  await posts.create(req.body)
  return { location: '/posts' }
}
