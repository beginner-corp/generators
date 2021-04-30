const fs = require('fs-extra')

module.exports = async function staticGenerator({dest}) {
  try {
    await fs.copy('src/template', dest)
  } catch(err) {
    throw err
  }
}