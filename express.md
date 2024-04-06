## Adavantages of expresss
• It simplifies web development and middleware support
• Middleware support
• Flexible routing system
• Template engine integretion

## Create an http server in node.js

``` Javascript
const express = require('express')
const app = express()
app.use(express.json())

const PORT = 3000
app.listen(PORT,()=> {
 console.log(`${PORT} listening`) }
 ```


## Hello world in nodejs

``` Javascript
const express = require('express')
const app = express()
app.use(express.json())

app.get('/' , (req,res) => {
 re.send('Hello world')
})

const PORT = 3000
app.listen(PORT,()=> {
 console.log(`${PORT} listening`) }

 ```

 ## Middleware

 HTTP Request -> middleware 1 (request logging)-> middleware 2(authentication) -> middleware3(CORS)

 ## How do you implement middlware in express.js?

 ``` Javascript
   const express = require("express")
   const app = express()
   const myMiddleware = (req,res,next) => {
      res.send("Interview ready")
      next()
   }
   app.use(myMiddleware)
 ```

## app.use() is used for globally and for all methods

## request pipeline

 HTTP Request -> middleware 1 (request logging)-> middleware 2(authentication) -> middleware3(CORS)

























