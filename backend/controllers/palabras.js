const config = require('../config')
const { Pool } = require('pg')


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




async function getWords(req,res){

    await pool.query(`select * from ${config.table}`, (err, result)=>{      
        if(!err)return res.status(200).send(result.rows)   
        else { console.log(err) ;return res.status(401).send({message:"fail"})}
    })

}

function addWord(req,res){

    let insertQuery = `insert into ${config.table} values ('${req.body.espanol}', '${req.body.ruso}')`;
    pool.query(insertQuery, (err, result)=>{
        if(!err){
           return res.status(200).send(["Item successfully inserted", req.body])
        }
        else { console.log(err) ;return res.status(401).send({message:"fail"})}
    })
}

module.exports = {
    getWords,
    addWord,
}