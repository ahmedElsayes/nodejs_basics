import fs from 'fs'

const readableStream = fs.createReadStream('./sampledata/index.txt', 'utf8')

readableStream.on('data', (chunk) => {
  console.log("**********new chunk is received!**********", '\n')
  console.log('\n', chunk)
})