'use strict'


const config = require('./config')
const app = require('./app')


app.listen(config.port, ()=>{
    console.log(`Server Running at http://localhost:/${config.port}`)
})






