(async () => {
  const db = require("../db")
  
  const connectDB = db.connect()
  const connectTable = await connectDB
  const [ rows ] = await connectTable.query("SELECT * FROM user")
  console.log(rows)
})()