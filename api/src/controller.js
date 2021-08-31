const userController = require("../../services/user/index")
const messageController = require("../../services/message/index")
const actionsCotroller = require("../../services/actions/index")

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

function message(req, res) {
  try {
    // message_id, user_id, destination_user_id, message
    messageController.postMessageService(req.params.message_id, req.params.user_id, req.params.destination_user_id, req.params.message).then((e) => {
      res.json({
        status: 200
      })
    })
  }

  catch (err) {
    res.json({err})
  }
}

function listFromUser(req, res) {
  try {
    messageController.listFromUser(req.params.user_id).then((e) => {
      res.json({
        messages: e
      })
    })
  } catch (err) {
    res.json({err})
  }
}

function listMine(req, res) {
  try {
    messageController.listMine(req.params.user_id).then((e) => {
      res.json({
        messages: e
      })
    })
  } catch (err) {
    res.json({err})
  }
}

function like(req, res) {
  // id, message_id
  try {
    actionsCotroller.actionService(req.params.id, 1, 0, req.params.message_id).then((e) => {
      res.json({
        status: 200
      })
    })
  } catch (err) {
    res.json({err})
  }
}

function unlike(req, res) {
  // id, message_id
  try {
    actionsCotroller.actionService(req.params.id, 0, 1, req.params.message_id).then((e) => {
      res.json({
        status: 200
      })
    })
  } catch (err) {
    res.json({err})
  }
}

module.exports = {
  user,
  message,
  listFromUser,
  listMine,
  like,
  unlike
}