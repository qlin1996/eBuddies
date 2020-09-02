const User = require("./user");
const Event = require("./event");
const Activity = require("./activity");
const Interest = require("./interest");
const Message = require("./message");

User.belongsToMany(Event, { through: Activity });
Event.belongsToMany(User, { through: Activity });
Message.belongsTo(Event);
Message.belongsTo(User, { as: "sender" });
// User.hasMany(Message, { as: "sender" });
Event.hasMany(Message);
// Event.belongsToMany(User);
//alias as host
User.hasMany(Event, { as: "host" });
Event.belongsTo(User, { as: "host" });
User.hasMany(Interest, { as: "userInterest" });

module.exports = {
  User,
  Event,
  Activity,
  Message,
  Interest,
};
