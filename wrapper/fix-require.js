const { readFileSync, writeFileSync } = require('fs')
const file = process.argv[2]

let data = readFileSync(file, 'utf-8')
data = data.replace(/require\("(fs|path)"\)/ig, (_, found, pos) => {
  return `re_quire('${found}')`
})

writeFileSync(file, data)
