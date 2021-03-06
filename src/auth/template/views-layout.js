module.exports = function () {
  return `module.exports = function layout(params) {

  let logout = \`<a href =/logout>Logout</a> | <a href=/admin > Admin</a > \`

  let notAuthed = \`<a href = /login>Login</a> | <a href=/register> Register </a >\`

  return \`
  <!doctype html>
  </html>
    <h1> My Login </h1>
  \${ params.account ? logout : notAuthed }
  \${ params.body }
  </html>
  \`
}`
}
