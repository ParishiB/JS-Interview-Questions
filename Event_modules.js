// import events module
// const EventEmitter = require('events')
// const myEmitter = new EventEmitter()

myEmitter = new EventEmitter()

myEmitter.on('eventName' , () => {
  console.log(`Event occured)
})

myEmitter.emit('eventName')

// we can also pass additional information along with the event

myEmitter.on("eventName" , (arga1,arg2) => {
  console.log("Event occured with arguments:" , args1 , arg2)
})

myEmitter.on("eventName" , "Args1" , "Args2" ) 

// Create server

const http = require("http")

const server = http.createServer((req,res) => {
res.end("Hello world")
})
server.listen(3000)
