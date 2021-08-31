const express = require("express")
const controller = require("./controller")

const app = express()


app.get("/user", controller.user)
// if there is no recipient, fill in 0
app.post("/message/:message_id/:user_id/:destination_user_id/:message", controller.message)
app.get("/list-from-user/:user_id", controller.listFromUser)
app.get("/list-mine/:user_id", controller.listMine)
app.post("/like/:id/:message_id", controller.like)
app.post("/unlike/:id/:message_id", controller.unlike)
app.listen(3333)