const mysql = require('mysql2')
const fs = require('fs')
require('dotenv').config()

// conexão MySQL (Aiven)
const pool = mysql.createConnection({
  connectionLimit: 10,
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  ssl: {
    ca: fs.readFileSync('./ca.pem') // certificado baixado do painel da Aiven
  }
})

module.exports = pool