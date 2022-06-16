// console.log("Hello Developers")

setTimeout(() => {
  console.log("hello, I am calling after 3 seconds")
}, 3000);

let time = 0
const timer = setInterval(() => {
  time += 1
  // console.log("Hello, I repeat myself every 2 seconds")
  console.log(`Hello, I made the call after ${time} seconds`)

  if (time > 20) clearInterval(timer)
}, 1000);