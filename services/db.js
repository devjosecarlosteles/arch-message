// connect with mySQL

async function connect() {
  if(global.connection && global.connection.state !== "disconected")
    return global.connection

    const mysql = require("mysql2/promise")

    // mysql://username:password@server:port/database
    const connection = await mysql.createConnection("mysql://root:iron1704@localhost:3306/arch-message")
    
    console.log("conectou com o MySQL!")
    global.connection = connection

    setTimeout(() => {
      connection.end()
    }, 1000)

    return connection
} 

module.exports = { connect }