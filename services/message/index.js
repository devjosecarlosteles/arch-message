async function postMessageService(message_id, user_id, destination_user_id, message) {
  // if destination_user_id == 0 then distination is for all users
  try {
    const db = require("../db")
    const connectDB = db.connect()
    const connectTable = await connectDB

    const postMessage = await connectTable.
    query(
    `INSERT INTO message (id, user_id, destination_user_id, message) VALUES ('${ 
      message_id 
    }', '${ user_id }', '${ destination_user_id }', '${ message }')`
    )

    console.log("status: ", 200)

    return postMessage
  }
  catch (err) {
    return console.log(err)
  }
}

// postMessageService(3, 111, 20, "TESTE MENsagem direcionada")

async function listFromUser(user_id) {
  try {
    const db = require("../db")
    
    const connectDB = db.connect()
    const connectTable = await connectDB
    
    const [ messages ] = await connectTable.query(`SELECT * FROM message WHERE user_id = '${ user_id }'`)

    console.log("status: ", 200)

    return messages
  } catch (err) {
    console.log(err)
  }
}

async function listMine(user_id) {
  try {
    const db = require("../db")

    const connectDB = db.connect()
    const connectTable = await connectDB

    const [ messages ] = await connectTable.query(`SELECT * FROM message WHERE user_id = '${ user_id }' OR destination_user_id = '${ user_id }'`)

    console.log(messages)

    return messages
  } catch (err) {
    console.log(err)
  }
}

module.exports = { 
  postMessageService, 
  listFromUser,
  listMine
}