const User = require("./user");
const Event = require("./event");
const Activity = require("./activity");

const Messages = require("./messages");

const Interest = require("./interest");

User.belongsToMany(Event, { through: Activity });
Event.belongsToMany(User, { through: Activity });
User.hasMany(Messages);
Messages.belongsTo(User);
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
  Messages,
  Interest,
};
