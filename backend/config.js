require('dotenv').config()

module.exports = {
    port: process.env.PORT,    
    host: process.env.HOST,
    user: process.env.USER,
    portdb: process.env.PORTDB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
}