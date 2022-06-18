import http from 'http'

const server = http.createServer((req, res) => {
  console.log("request from: ", req.url)
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hey, Nodejs Fans, keep learning!')
})

server.listen(3000, '127.0.0.1')
console.log("Server is running on port 3000")