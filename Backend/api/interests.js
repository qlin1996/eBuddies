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
    console.log("USER INT", interests);
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

//DELETE -->  /API/INTERESTS/:USERID
router.delete("/:userId", async (req, res, next) => {
  try {
    await Interest.destroy({
      where: {
        userId: req.params.userId,
      },
    });
    const interests = await Interest.create(req.body);
    res.json(interests);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
