const router = require("express").Router();
const { Activity } = require("../db/models");

//POST --> /API/ACTIVITIES
router.post("/", async (req, res, next) => {
  /* etc */
  try {
    const activity = await Activity.create(req.body);
    res.json(activity);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
