// const calculator = require('./calculator')
import {divider, adder, multiplier} from './calculator.js'

// console.log("Hello Developers")

// setTimeout(() => {
//   console.log("hello, I am calling after 3 seconds")
// }, 3000);

// let time = 0
// const timer = setInterval(() => {
//   time += 1
//   console.log(`Hello, I made the call after ${time} seconds`)

//   if (time > 20) clearInterval(timer)
// }, 1000);

// console.log(__dirname)
// console.log(__filename)

// Learn module patterns ******

const var1 = 4
const var2 = 2
// console.log(calculator.divider(var1,var2))
// console.log(calculator.multiplier(var1,var2))
// console.log(calculator.adder(var1,var2))

console.log(divider(var1, var2))
console.log(multiplier(var1, var2))
console.log(adder(var1, var2))