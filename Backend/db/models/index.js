const User = require("./user");
const Event = require("./event");
const Activity = require("./activity");

User.belongsToMany(Event, { through: Activity });
Event.belongsToMany(User, { through: Activity });

// Event.belongsToMany(User);
//alias as host
User.hasMany(Event, { as: "host" });
Event.belongsTo(User, { as: "host" });

module.exports = {
  User,
  Event,
  Activity,
};
