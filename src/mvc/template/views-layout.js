module.exports = function() {
  return `
module.exports = function layout(body) {
  return \`
<!DOCTYPE html>
<html lang=en>
<head>
<meta charset=UTF-8>
<meta name=viewport content=width=device-width,initial-scale=1>
</head>
<body>
\${ body }
</body>
</html>\`
}
}
