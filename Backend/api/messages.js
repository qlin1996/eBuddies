const router = require("express").Router();
const { Message } = require("../db/models");

//POST -->  /API/MESSAGES
router.post("/", async (req, res, next) => {
  try {
    const message = await Message.create(req.body);
    res.json(message);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
