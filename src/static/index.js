let exec = require('child_process').execSync
let path = require('path')

module.exports = async function staticGenerator ({ dest }) {
  let src = path.join(process.cwd(), 'src', 'static', 'template')
  exec(`cp -r ${src} ${dest}`)
}
