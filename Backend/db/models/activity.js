const Sequelize = require("sequelize");
const db = require("../db");

const Activity = db.define("activity", {
  attended: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Activity;
