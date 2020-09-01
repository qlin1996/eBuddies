const router = require("express").Router();
const { User, Message, Event } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (err) {
    next(err);
  }
});

router.get("/:messageId", async (req, res, next) => {
  try {
    const message = await Message.findOne({
      where: {
        id: req.params.messageId,
      },
    });
    res.json(message);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
