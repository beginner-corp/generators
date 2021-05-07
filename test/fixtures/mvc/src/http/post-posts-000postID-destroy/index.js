let posts = require('@architect/shared/posts')
let arc = require('@architect/functions')

exports.handler = arc.http.async(destroy)

async function destroy (req) {
  await posts.destroy(req.params.postID)
  return {
    location: '/posts'
  }
}
