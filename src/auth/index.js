let path = require('path')
let fs = require('fs')
let mkdir = require('mkdirp')
let mutate = require('./mutate')
let getAdmin = require('./template/get-admin')
let getLogin = require('./template/get-login')
let index = require('./template/get-index')
let getLogout = require('./template/get-logout')
let packagejson = require('./template/package-json')
let getRegister = require('./template/get-register')
let postLogin = require('./template/post-login')
let postRegister = require('./template/post-register')
let layout = require('./template/views-layout')
let sharedAuth = require('./template/shared-auth')

module.exports = function auth ({ dest }) {

  // first try to handle the arcfile
  mutate({ dest })

  // now generate the auth
  let files = [
    { where: `${dest}/src/http/get-index/index.js`,           what: index },
    { where: `${dest}/src/http/get-admin/index.js`,           what: getAdmin },
    { where: `${dest}/src/http/get-login/index.js`,           what: getLogin },
    { where: `${dest}/src/http/get-logout/index.js`,          what: getLogout },
    { where: `${dest}/src/http/get-register/index.js`,        what: getRegister },
    { where: `${dest}/src/http/post-login/index.js`,          what: postLogin },
    { where: `${dest}/src/shared/auth.js`,                    what: sharedAuth },
    { where: `${dest}/src/views/layout.js`,                   what: layout },
    { where: `${dest}/src/http/post-register/index.js`,       what: postRegister },
    { where: `${dest}/package.json`,                          what: packagejson },
  ]

  for (let file of files) {
    if (!fs.existsSync(file.where)) {
      mkdir.sync(path.dirname(file.where))
      fs.writeFileSync(file.where, file.what({ dest }))
    }
  }
}
