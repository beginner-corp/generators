let arc = require('@architect/functions')
let data = require('@begin/data')
let bcrypt = require('bcryptjs')

exports.handler = arc.http.async(valid, register)

// check to see if account exists
async function valid(req) {
  let result = await data.get({
    table: 'accounts',
    key: req.body.email
  })
  if (result) {
    return {
      location: `/?error=exists`
    }
  }
}

async function register(req) {
  // salt the password and generate a hash
  let salt = bcrypt.genSaltSync(10)
  let hash = bcrypt.hashSync(req.body.password, salt)

  //save hash and email account to db
  let result = await data.set({
    table: 'accounts',
    key: req.body.email,
    password: hash
  })

  return {
    session: {
      account: {
        email: req.body.email
      }
    },
    location: '/admin'
  }
}