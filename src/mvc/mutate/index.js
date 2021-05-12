let fs = require('fs')
let path = require('path')
let arcfile = require('./arcfile')
let jsonfile = require('./jsonfile')
let pkgfile = require('./pkgfile')
let yamlfile = require('./yamlfile')
let tomlfile = require('./tomlfile')

module.exports = function mutateArcfile (params) {

  let app = path.join(params.dest, 'app.arc')
  let hidden = path.join(params.dest, '.arc')
  let json = path.join(params.dest, 'arc.json')
  let pkg = path.join(params.dest, 'package.json')
  let yaml = path.join(params.dest, 'arc.yaml')
  let yml = path.join(params.dest, 'arc.yml')
  let toml = path.join(params.dest, 'arc.toml')

  // look for app.arc or .arc
  if (fs.existsSync(app) || fs.existsSync(hidden)) {
    arcfile(params)
    return
  }

  // look for arc.json
  if (fs.existsSync(json)) {
    jsonfile(params)
    return
  }

  // look in package.json
  if (fs.existsSync(pkg)) {
    // eslint-disable-next-line
    let p = require(pkg)
    if (p.arc || p.architect) {
      pkgfile(params)
      return
    }
  }

  // try arc.yaml or arc.yml
  if (fs.existsSync(yaml) || fs.existsSync(yml)) {
    yamlfile(params)
    return
  }

  // look for arc.toml
  if (fs.existsSync(toml)) {
    tomlfile(params)
    return
  }

  // if we made it here no arcfile was found; so write a default one
  fs.writeFileSync(app, `@app\nmvc\n\n@http\n\n@tables`)

  // and mutate that
  arcfile(params)
}
