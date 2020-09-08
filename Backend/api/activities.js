const router = require("express").Router();
const { Activity } = require("../db/models");

//GET --> /API/ACTIVITIES
router.get("/", async (req, res, next) => {
  try {
    const activities = await Activity.findAll();
    res.json(activities);
  } catch (error) {
    next(error);
  }
});

//GET --> /API/ACTIVITIES/:USERID
router.get("/:userId", async (req, res, next) => {
  try {
    const activities = await Activity.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(activities);
  } catch (error) {
    next(error);
  }
});
//GET --> /API/ACTIVITIES/:EVENTID
router.get("/:eventId", async (req, res, next) => {
  try {
    const activities = await Activity.findAll({
      where: {
        eventId: req.params.eventId,
      },
    });
    res.json(activities);
  } catch (error) {
    next(error);
  }
});

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
