import fs from 'fs'

// const textVal = fs.readFileSync('readme.txt', 'utf8')
// console.log(textVal)

// const writtenTxt = textVal + " This is also additional layer for writting"
// fs.writeFileSync("writeMe.txt", writtenTxt)

// ********** read and writing asyncronously************
// fs.readFile('readme.txt', 'utf8', (err, data) => {
//   const writtenTxt = data + ". This is additional sentence for writting"
//   fs.writeFileSync("writeMe.txt", writtenTxt)
//   console.log("Just started reading stream...")
// })

// ************** create and remove directories***********
const backDirectories = fs.readdirSync('../')
const directory = fs.readdirSync('./')
console.log("directory files: ", directory)
console.log("backDirectories files: ", backDirectories)

if (directory.includes("newfolder")) {
  fs.unlink("./newfolder/writtenfile.txt", () => {
    fs.rmdirSync("newfolder")
  })
}

setTimeout(() => {
  fs.mkdir("newfolder", () => {
    fs.readFile("readme.txt", 'utf8', (err, data) => {
      console.log("Just started reading stream...")
      const writtenTxt = data + ". This is additional sentence for writting"
      fs.writeFile("./newfolder/writtenfile.txt", writtenTxt, () => {})
    })
  })
}, 5000);

