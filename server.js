import http from 'http'
import fs from 'fs'
// const server = http.createServer((req, res) => {
//   console.log("request from: ", req.url)
//   res.writeHead(200, {'Content-Type': 'text/plain'})
//   res.end('Hey, Nodejs Fans, keep learning!')
// })

// Third lesson in streams **************
// const server = http.createServer((req, res) => {
//   const readableStream = fs.createReadStream('./sampledata/index.txt', 'utf8')

//   console.log("request from: ", req.url)
//   res.writeHead(200, {'Content-Type': 'text/plain'})

//   readableStream.pipe(res)
// })

// Forth lesson in streaming html pages **************
// const server = http.createServer((req, res) => {
//   const readableStream = fs.createReadStream('./webpage/index.html', 'utf8')
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   readableStream.pipe(res)
// })

// Fivth lesson in streaming JSON data **************
const server = http.createServer((req, res) => {
  const sampleData = {
    name: "Arab Technologists",
    cotent: "Teach technology in arabic",
    aim: "Competent arab youth in tech"
  }
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(sampleData))
})

server.listen(3000, '127.0.0.1')
console.log("Server is running on port 3000")