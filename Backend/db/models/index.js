const User = require("./user");
const Event = require("./event");
const Activity = require("./activity");
const Interest = require("./interest");

User.belongsToMany(Event, { through: Activity });
Event.belongsToMany(User, { through: Activity });

// Event.belongsToMany(User);
//alias as host
User.hasMany(Event, { as: "host" });
Event.belongsTo(User, { as: "host" });
User.hasMany(Interest, { as: "userInterest" });
// Interest.belongsTo(User, { as: "userInterests" });

module.exports = {
  User,
  Event,
  Activity,
  Interest,
};
