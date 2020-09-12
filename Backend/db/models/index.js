const User = require("./user");
const Event = require("./event");
const Activity = require("./activity");
const Interest = require("./interest");
const Message = require("./message");

User.belongsToMany(Event, { through: Activity });
Event.belongsToMany(User, { through: Activity });
Message.belongsTo(Event);
Message.belongsTo(User, { as: "sender" });
Event.hasMany(Message);
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
