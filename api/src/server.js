const express = require("express")

const app = express()

app.get("/user", (req, res) => {
  // call mircro service
  return res.json({
    ok: true
  })
})

app.listen(3333)