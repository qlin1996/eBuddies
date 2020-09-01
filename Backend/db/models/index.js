const User = require("./user");
const Event = require("./event");
const Activity = require("./activity");
const Interest = require("./interest");
const Messages = require("./messages");

User.belongsToMany(Event, { through: Activity });
Event.belongsToMany(User, { through: Activity });
Messages.belongsTo(Event);
Messages.belongsTo(User, { as: "sender" });
User.hasMany(Messages, { as: "sender" });
Event.hasMany(Messages);
// Event.belongsToMany(User);
//alias as host
User.hasMany(Event, { as: "host" });
Event.belongsTo(User, { as: "host" });
User.hasMany(Interest, { as: "userInterest" });

module.exports = {
  User,
  Event,
  Activity,
  Messages,
  Interest,
};
