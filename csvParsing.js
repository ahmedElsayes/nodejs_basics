import fs from 'fs'
import { parse } from 'csv-parse';
import csv from 'csvtojson'

// Parsing CSV data JSON, so we can migrate to new database - using "csv-parse" module**********

// const extractedData = []
// let headerTaps = []
// let i = 0

// const processData = (_row) => {
//   if (i === 0) {
//     headerTaps = _row
//   } else {
//     let objectRow = {}
//     _row.forEach((_val, indx) => {
//       objectRow = { ...objectRow, [headerTaps[indx]]: _val }
//     })
//     extractedData.push(objectRow)
//   }
//   i = i + 1
// }

// fs.createReadStream("./sampledata/users-sample.csv")
//   .pipe(parse({ delimiter: ',' }))
//   .on("data", (row) => {
//     processData(row)
//   })
//   .on("end", function () {
//     // console.log(JSON.stringify(extractedData, null, 2))
//     // console.log("finished**************************");
//     fs.writeFileSync("./sampledata/csvjson.json", JSON.stringify(extractedData, null, 2))
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });

// Parsing CSV data JSON, so we can migrate to new database - using "csvtojson" module**********
const csvFilePath = "./sampledata/users-sample.csv"
const jsonArray = await csv().fromFile(csvFilePath);
fs.writeFileSync("./sampledata/csvjson.json", JSON.stringify(jsonArray, null, 2))

// test to see how we can read a serialized json file
// fs.readFile("./sampledata/csvjson.json", "utf8", (err, data) => {
//   console.log(typeof JSON.parse(JSON.parse(data)[0].is_admin))
//   console.log("*******************************************************")
// })