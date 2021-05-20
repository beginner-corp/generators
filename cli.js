#! /usr/bin/env node

if (require.main === module) {
  (async function main (){
    await cli()
  })()
}

module.exports = cli

async function cli() {
  console.log('praise cage', process.argv)
}
