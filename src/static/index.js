// let exec = require('child_process').execSync
// let path = require('path')

// module.exports = function staticGenerator ({ dest }) {
//   // mutate arc file
//   // copy public folder
//   let src = path.join(__dirname, 'template')
//   exec(`cp -r ${src} ${dest}`)
// }

let path = require('path')
let fs = require('fs')
let mkdir = require('mkdirp')
let mutate = require('./mutate')

let index = require('./template/index')
let packagejson = require('./template/package-json')

module.exports = function auth({ dest }) {

  // first try to handle the arcfile
  mutate({ dest })

  // now generate the auth
  let files = [
    { where: `${dest}/public/index.html`, what: index },
    { where: `${dest}/package.json`, what: packagejson },
  ]

  for (let file of files) {
    if (!fs.existsSync(file.where)) {
      mkdir.sync(path.dirname(file.where))
      fs.writeFileSync(file.where, file.what({ dest }))
    }
  }
}




// ask about git