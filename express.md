## Adavantages of expresss
• It simplifies web development and middleware support
• Middleware support
• Flexible routing system
• Template engine integretion

## Create an http server in node.js

`const express = require('express')
const app = express()
app.use(express.json())

const PORT = 3000
app.listen(PORT,()=> {
 console.log(`${PORT} listening`) } `


 ## Middleware
