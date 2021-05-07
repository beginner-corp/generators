module.exports = function ({ model, hashkey, plural }) {
  return `let arc = require('@architect/functions')

// export a boilerplate CRUDL model
module.exports = { create, read, update, destroy, list }

async function create (${model}) {
  let data = await arc.tables()
  ${model}.${hashkey} = Buffer.from(Date.now() + '').toString('base64')
  return data.${plural}.put(${model})
}

async function read (${hashkey}) {
  let data = await arc.tables()
  return data.${plural}.get({ ${hashkey} })
}

async function update(${model}) {
  let data = await arc.tables()
  return data.${plural}.put(${model})
}

async function destroy (${hashkey}) {
  let data = await arc.tables()
  return data.${plural}.delete({ ${hashkey}})
}

async function list () {
  let data = await arc.tables()
  let result = await data.${plural}.scan({})
  return result.Items
}
`
}
