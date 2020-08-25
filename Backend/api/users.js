const router = require("express").Router();
const { User, Event } = require("../db/models");

const isLoggedIn = (req, res, next) => {
  if (!User) {
    const error = new Error(
      "You are not authorized to Access the requested information"
    );
    res.status(401).send(error);
    return next(error);
  } else {
    next();
  }
};

//GET --> /api/users
router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "email"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//GET --> /api/users/:userId
router.get("/:userId", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user || User.isAdmin === "no") {
      const err = Error("Credientials not found");
      err.status = 404;
      return next(err); // or `throw err`
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

//PUT --> /api/users/:id
router.put("/:userId", async (req, res, next) => {
  try {
    await User.findOne({
      where: {
        id: req.params.userId,
      },
    })
      .then((user) => user.update(req.body))
      .then((user) => {
        res.json(user);
      })
      .catch(next);
  } catch (error) {
    next(error);
  }
});

//POST --> /api.users
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
