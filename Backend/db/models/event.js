const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

const Event = db.define("event", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  imgUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://www.nydailynews.com/resizer/yR191ZzXawTpPwelV6Bw9wMouAg=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/K67GWYOYMKSI45CNMJLA7WWTGM.jpg",
  },

  date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  time: {
    type: Sequelize.TIME,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  category: {
    type: Sequelize.ENUM("Food", "Entertainment", "Education", "Fitness"),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Event;
