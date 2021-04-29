const fs = require('fs');

module.exports = function static(props={}) {
  fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    fs.mkdirSync('./public_copy')
    fs.writeFile('./public_copy/index.html', data, err => {
      if (err) {
        console.error(err)
        return
      }
    })
  })
}
