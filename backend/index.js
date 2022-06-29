'use strict'


const config = require('./config')
const { Pool } = require('pg')
const app = require('./app')




const pool = new Pool({
    host: config.host,
    user: config.user,
    port: config.portdb,
    password: config.password,
    database: config.database,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})



app.listen(config.port, ()=>{
    console.log(`Server Running at http://localhost/${config.port}`)
})






