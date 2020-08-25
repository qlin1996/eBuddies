const router = require("express").Router();

router.get("/", function (req, res, next) {
  /* etc */
});
router.post("/", function (req, res, next) {
  /* etc */
});
router.put("/:eventId", function (req, res, next) {
  /* etc */
});

router.delete("/:eventId", function (req, res, next) {
  /* etc */
});

module.exports = router;
