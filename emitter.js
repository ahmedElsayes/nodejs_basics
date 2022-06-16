// const events = require('events');
import events from "events"

class Person extends events.EventEmitter {
  constructor(name, age) {
    super()
    this.name = name;
    this.age = age;
  }
}

const Ahmed = new Person("Ahmed", 25)
const Ali = new Person("Ali", 24)
const Hassan = new Person("Hassan", 23)
const People = [Ahmed, Ali, Hassan]

// listen**
People.forEach((_person) => {
  _person.on("SomeCall", (msg) => {
    console.log(`${msg}: Hi this is me ${_person.name} and my age is ${_person.age}.`)
  })
})
// speak***
Ahmed.emit("SomeCall", "Call from Ahmed")

// const caller = new events.EventEmitter();
// // Listen ***
// caller.on("somecall", (msg) => {
//   console.log(msg)
// })

// // Talk ****
// caller.emit("somecall", "Developer should keep practicing")