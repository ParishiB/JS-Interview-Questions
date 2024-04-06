Q) Top 5 built in modules?
  1)fs  2) path  3) os 4)events 5)http

 // fs modules

const fs = require("fs")

fs.writeFileSync('./test.tsxt' , "Hey there")
// the above function will synchronously create the new file named test.txt and will wrute Hey there inside it
// Sync means it is a synchronous call
fs.writeFile('./test/txt' , "Hey there" ,(err) => console.log(err) return;)

const res = fs.readFileSync('./contacts.txt' , 'utf-8')
console.log(result)

fs.readFileSync('./contacts.txt' , 'utf-8' , ((err,data) => {
  if(err)console.log(err)
  console.log(data)
})

// async will not return anything , nut sync will return 
fs.appendFileSync("./test.txt" , `Date.now().toLocaleString`)


 // Q) Nodejs architecture
 // Synchronous and asynchronous

nodejs -> event queue -> option 1 (blocking operation) || option 2(non-blocking operation) 
if(non blocking AKA asynchronous) It will be immediately solved
if(blocking AKA synchronous) It will be send to Thread pool and workers will be assigned to it

// path

// os
const os = require('os')


