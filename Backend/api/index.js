const router = require("express").Router();

router.use("/interests", require("./interests"));
router.use("/users", require("./users"));
router.use("/events", require("./events"));
router.use("/messages", require("./messages"));
router.use("/activities", require("./activities"));
//404 API ROUTE NOT FOUND
router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
