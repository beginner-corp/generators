let path = require('path')
let fs = require('fs')
let mkdir = require('mkdirp')
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

module.exports = function mvc ({ dest, model, hashkey, plural, rest }) {

  // first try to handle the arcfile
  mutate({ dest, plural, hashkey })

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

  for (let file of files) {
    if (!fs.existsSync(file.where)) {
      mkdir.sync(path.dirname(file.where))
      fs.writeFileSync(file.where, file.what({ dest, model, hashkey, plural, rest }))
    }
  }
}

