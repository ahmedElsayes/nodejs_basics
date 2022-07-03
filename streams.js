import fs from 'fs'
import { parse } from 'csv-parse';
import { pipeline, Transform } from 'stream'
import csv from 'csvtojson'

// First Lesson *************

// const readableStream = fs.createReadStream('./sampledata/index.txt', 'utf8')

// readableStream.on('data', (chunk) => {
//   console.log("**********new chunk is received!**********", '\n')
//   console.log('\n', chunk)
// })

// Second lesson **************

// const readableStream = fs.createReadStream('./sampledata/index.txt', 'utf8')
// const writableStream = fs.createWriteStream('./sampledata/writeme.txt')

// readableStream.on('data', (chunk) => {
//   const addedline = '\n' + "**********Separating line**********" + '\n'
//   writableStream.write(chunk + addedline)
// })

// Third lesson **************
// *****alternatively use pipe(), then:

// readableStream.pipe(writableStream)

// Forth lesson ***************
// ******to read from Command terminal and write to command terminal & use Transform module to alter data between streams

// process.stdin.on('data', (chunk) => {
//   const processedVal = "Output Result: I am saying " + chunk
//   process.stdout.write(processedVal)
// })

// process.stdin.pipe(process.stdout)

// Fifth lesson ***************
// ******Use Transform module to alter data between streams

// const upperCaseTransform = new Transform({
//   transform(chunk, _encoding, callback) {
//     const processedVal = "Output Result: I am saying " + chunk
//     callback(null, processedVal.toString().toUpperCase())
//   }
// })
// pipeline(process.stdin, upperCaseTransform, process.stdout, (err) => {
//   if (err) {
//     console.log('Pipeline encountered an error', err)
//   }
// })

// Sixth lesson ***************
// *********In this lesson will see how we can read CSV file and store it in .json file
const csvFilePath = "./sampledata/users-sample.csv"
const jsonArray = await csv().fromFile(csvFilePath);
fs.writeFileSync("./sampledata/csvjson.json", JSON.stringify(jsonArray, null, 2))