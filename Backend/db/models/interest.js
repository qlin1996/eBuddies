const Sequelize = require("sequelize");
const db = require("../db");

const Interest = db.define("interest", {
  userInterest: {
    type: Sequelize.ENUM("Food", "Entertainment", "Education", "Fitness"),
  },
});

module.exports = Interest;
