let fs = require('fs')
let mutate = require('./mutate')
let create = require('./template/create-model')
let destroy = require('./template/delete-model')
let index = require('./template/get-index')
let list = require('./template/list-model')
let packagejson = require('./template/package-json')
let read = require('./template/read-model')
let crud = require('./template/shared-model')
let update = require('./template/update-model')
let layout = require('./template/views-layout')
let form = require('./template/views-model-form')

module.exports = function mvc (params) {

  let { dest, model, hashkey, plural } = parse(params)

  // first try to handle the arcfile
  mutate({ plural, hashkey })

  // now generate the mvc
  let files = [
    { where: `${dest}/src/http/get-index/index.js`,                              what: index },
    { where: `${dest}/src/http/get-${plural}-000${hashkey}/index.js`,        what: read },
    { where: `${dest}/src/http/get-${plural}/index.js`,                        what: list },
    { where: `${dest}/src/http/post-${plural}-000${hashkey}-destroy/index.js`, what: destroy },
    { where: `${dest}/src/http/post-${plural}-000${hashkey}/index.js`,         what: update },
    { where: `${dest}/src/http/post-${plural}/index.js`,                       what: create },
    { where: `${dest}/src/shared/${model}.js`,                                 what: crud },
    { where: `${dest}/src/views/layout.js`,                                      what: layout },
    { where: `${dest}/src/views/${model}-form.js`,                               what: form },
    { where: `${dest}/package.json`,                                             what: packagejson },
  ]

  for (let file of files)
    if (!fs.existsSync(file.where))
      fs.writeFileSync(file.where, file.what(params))
}

/** helper to get params from cli args */
function parse (params) {
  // syntax: arc g mvc posts postID:string title:string content:text
  // required: model name, hashkey:string and at least one other param
  return {
    dest: params.dest,
    model: 'post',
    hashkey: 'postID',
    plural: 'posts',
    rest: [ { name: 'title', type: 'string' }, { name: 'content', type: 'text' } ]
  }
}

