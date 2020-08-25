const User = require("./user");
const Event = require("./event");

User.belongsToMany(Event);
Event.belongsToMany(User);
User.hasMany(Event);
Event.belongsTo(User);

module.exports = {
  User,
  Event,
};
