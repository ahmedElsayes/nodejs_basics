// const events = require('events');
import events from "events"

const caller = new events.EventEmitter();
// Listen ***
caller.on("somecall", (msg) => {
  console.log(msg)
})

// Talk ****
caller.emit("somecall", "Developer should keep practicing")