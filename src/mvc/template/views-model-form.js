module.exports = function ({ model, hashkey, plural, rest }) {
  return `
module.exports = function form (${model}) {

  let action = ${model}? \`/${plural}/\${ ${model}.${hashkey}}\` : '/${plural}'
  let form = \`<form action="\${ action }" method=post>\`

  if (${model}) {
    form += \`<input type=hidden name=${hashkey} value=\${ ${model}.${hashkey} }>\`
  }

  form += \`
    ${renderParams(rest)}
    <button>Save</button>
  </form>\`

  if (${model}) {
    form += \`
    <form action=/${plural}/\${ ${model}.${hashkey} }/destroy method=post>
      <button>destroy</button>
    </form>\`
  }

  return form
}`
}

// { name: 'title', type: 'string', value: 'my cool blogpost' }
function renderParams (params) {

  let s = ''

  for (let p of params) {
    s += `<label for=${p.name}>${p.name}`

    if (p.type === 'string') {
      s += `<input type=text name=${p.name} required>`
    }

    if (p.type === 'text') {
      s += `<textarea name=${p.name} required></textarea>`
    }

    s += `</label>`
  }
  return s
}
