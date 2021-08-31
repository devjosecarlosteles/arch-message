async function actionService (id, like, unlike, message_id) {
  try {
    const db = require("../db")
  
    const connectDB = db.connect()
    const connectTable = await connectDB

    const postMessage = await connectTable.
    query(
    `INSERT INTO actions (id, likeC, unlikeC, message_id_) VALUES ('${ 
      id
    }', '${ like }', '${ unlike }', '${ message_id }')`
    )

    console.log("status: ", 200)

    return postMessage
  } catch (err) {
    
  }
}

module.exports = { actionService }