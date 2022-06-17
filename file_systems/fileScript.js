import fs from 'fs'

// const textVal = fs.readFileSync('readme.txt', 'utf8')
// console.log(textVal)

// const writtenTxt = textVal + " This is also additional layer for writting"
// fs.writeFileSync("writeMe.txt", writtenTxt)

fs.readFile('readme.txt', 'utf8', (err, data) => {
  const writtenTxt = data + ". This is additional sentence for writting"
  fs.writeFileSync("writeMe.txt", writtenTxt)
  console.log("Just started reading stream...")
})