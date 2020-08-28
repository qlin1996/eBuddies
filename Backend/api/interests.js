const router = require("express").Router();
const { Interest } = require("../db/models");

//GET --> /API/INTERESTS/:USERID
router.get("/:userId", async (req, res, next) => {
  try {
    const interests = await Interest.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(interests);
  } catch (error) {
    next(error);
  }
});

//POST -->  /API/INTERESTS/
router.post("/", async (req, res, next) => {
  try {
    const interests = await Interest.create(req.body);
    res.json(interests);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
