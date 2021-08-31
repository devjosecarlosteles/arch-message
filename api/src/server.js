const express = require("express")
const controller = require("./controller")

const app = express()

app.get("/user", controller.user)
app.listen(3333)