const router = require("express").Router();
const { User, Event, Message, Activity } = require("../db/models");

//GET --> /API/EVENTS
router.get("/", async (req, res, next) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    next(error);
  }
});

// GET --> API/EVENTS/:EVENTID
router.get("/:eventId", async (req, res, next) => {
  try {
    const event = await Event.findOne({
      where: {
        id: req.params.eventId,
      },
      include: { all: true },
    });
    res.json(event);
  } catch (error) {
    next(error);
  }
});

// GET --> API/EVENTS/:EVENTID/MESSAGES
router.get("/:eventId/messages", async (req, res, next) => {
  try {
    const eventMessages = await Message.findAll({
      where: {
        eventId: req.params.eventId,
      },
      include: { model: User, as: "sender" },
    });
    res.json(eventMessages);
  } catch (error) {
    next(error);
  }
});

//POST --> /API/EVENTS
router.post("/", async (req, res, next) => {
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch (error) {
    next(error);
  }
});

//PUT --> /PUT/EVENTS/:EVENTID
router.put("/:eventId", async (req, res, next) => {
  try {
    const event = await Event.findOne({
      where: {
        id: req.params.eventId,
      },
    });
    const updatedEvent = await event.update(req.body);
    res.send(updatedEvent);
  } catch (error) {
    next(error);
  }
});

//DELETE --> /DELETE/EVENTS/:EVENTID
router.delete("/:eventId", async (req, res, next) => {
  try {
    const event = await Event.destroy({
      where: {
        id: req.params.eventId,
      },
    });
    if (!event) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
});

//PATCH --> /API/EVENTS/:USERID
router.patch("/:eventId/users/:userId", async (req, res, next) => {
  try {
    await Activity.update(req.body, {
      where: {
        eventId: req.params.eventId,
        userId: req.params.userId,
      },
    });
    const eventActivity = await Activity.findOne({
      where: {
        eventId: req.params.eventId,
        userId: req.params.userId,
      },
    });
    res.json(eventActivity);
  } catch (error) {
    next(error);
  }
});
//GET --> /API/CAMPUSES/:ID
router.get("/:id", async (req, res, next) => {
  try {
    const campuses = await Campus.findOne({
      where: {
        id: req.params.id,
      },
      include: Student,
    });
    res.json(campuses);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
