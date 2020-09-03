const router = require("express").Router();
const { User, Event, Message } = require("../db/models");

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
      include: Message,
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
    });
    res.json(eventMessages);
  } catch (error) {
    next(error);
  }
});

//POST --> /API/EVENTS
router.post("/", async (req, res, next) => {
  /* etc */
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch (error) {
    next(error);
  }
});

//PUT --> /PUT/EVENTS/:EVENTID
router.put("/:eventId", async (req, res, next) => {
  /* etc */
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
  /* etc */
  try {
    await Event.destroy({
      where: {
        id: req.params.eventId,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
