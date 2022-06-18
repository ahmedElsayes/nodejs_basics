import fs from 'fs'

// First Lesson *************
// const readableStream = fs.createReadStream('./sampledata/index.txt', 'utf8')

// readableStream.on('data', (chunk) => {
//   console.log("**********new chunk is received!**********", '\n')
//   console.log('\n', chunk)
// })

// Second lesson **************
const readableStream = fs.createReadStream('./sampledata/index.txt', 'utf8')
const writableStream = fs.createWriteStream('./sampledata/writeme.txt')

readableStream.on('data', (chunk) => {
  const addedline = '\n' + "**********Separating line**********" + '\n'
  writableStream.write(chunk+addedline)
})