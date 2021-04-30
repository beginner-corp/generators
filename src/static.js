const fs = require('fs-extra')

module.exports = async function static(props={}) {
  // call a function, it knows where the contents are
  // pass in directory to copy to, props
  // read from props of where to copy to

  


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
