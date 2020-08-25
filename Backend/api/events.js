const router = require("express").Router();
const { User, Event } = require("../db/models");

//GET --> /API/EVENTS
router.get("/", async (req, res, next) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (err) {
    next(err);
  }
});

//POST --> /API/EVENTS
router.post("/", function (req, res, next) {
  /* etc */
});

//PUT --> /PUT/EVENTS/:EVENTID
router.put("/:eventId", function (req, res, next) {
  /* etc */
});

//DELETE --> /DELETE/EVENTS/:EVENTID
router.delete("/:eventId", function (req, res, next) {
  /* etc */
});

module.exports = router;
