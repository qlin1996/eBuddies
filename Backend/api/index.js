const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/events", require("./events"));

//404 API ROUTE NOT FOUND
router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});
module.exports = router;
