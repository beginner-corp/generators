let arc = require('@architect/functions')

// export a boilerplate CRUDL model
module.exports = { create, read, update, destroy, list }

async function create (post) {
  let data = await arc.tables()
  post.postID = Buffer.from(Date.now() + '').toString('base64')
  return data.posts.put(post)
}

async function read (postID) {
  let data = await arc.tables()
  return data.posts.get({ postID })
}

async function update (post) {
  let data = await arc.tables()
  return data.posts.put(post)
}

async function destroy (postID) {
  let data = await arc.tables()
  return data.posts.delete({ postID })
}

async function list () {
  let data = await arc.tables()
  let result = await data.posts.scan({})
  return result.Items
}
