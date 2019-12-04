const express = require('express')
const app = express()
app.get('/',(req,res)=>res.send('Hello world!'))
app.listen(3000,()=>console.log('Example app listening on port 3000!'))
//Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. 
//It is designed for building web applications and APIs.
//It has been called the de facto standard server framework for Node.js.
