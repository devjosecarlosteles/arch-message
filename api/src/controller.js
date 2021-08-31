const userController = require("../../services/user/index")

function user(req, res) {
  try {
    userController.userService().then((e) => {
      res.json({
        status: e
      })
    })
  } catch (err) {
    res.json({
      err
    })
  }
}

module.exports = {
  user
}