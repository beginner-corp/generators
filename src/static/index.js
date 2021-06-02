let exec = require('child_process').execSync
let path = require('path')

module.exports = function staticGenerator ({ dest }) {
  // mutate arc file
  // copy public folder
  let src = path.join(__dirname, 'template')
  exec(`cp -r ${src} ${dest}`)
}


// ask about git