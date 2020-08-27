const router = require("express").Router();
const { User, Messages } = require("../db/models");

router.get("/:userId", async (req, res, next) => {
  try {
    const messages = await Messages.findOne({
      where: {
        id: req.params.userId,
      },
    });
    res.json(messages);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
