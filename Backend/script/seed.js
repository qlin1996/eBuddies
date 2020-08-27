"use strict";
const db = require("../db");
const { User, Event, Activity } = require("../db/models");
const faker = require("faker");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  const users = [];
  const events = [];

  const activities = [
    {
      eventId: 1,
      userId: 1,
    },
    {
      eventId: 1,
      userId: 2,
    },
  ];

  for (let i = 0; i < 100; i++) {
    const user = await User.create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      description: faker.lorem.paragraph(),
      email: faker.internet.email(),
      password: "1234",
      streetAddress: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: 12345,
      // imgUrl,
      //interests
      // userId: id + 1,
      // eventId: 1,
    });
    users.push(user.dataValues);
  }
  const claire = await User.create({
    firstName: "Claire",
    lastName: "Giordano",
    description:
      "A fordham student looking to find fun workout classes in nyc & quiet coffee shops for studying ",
    email: "cgiordano1@gmail.com",
    streetAddress: "1821 claire drive",
    city: "New York",
    state: "New York",
    zipCode: "10019",
    password: "claire",
    imgUrl:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFXsmj2gUhdBA/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=ehdUywqM6iY3w3AG96LflI_5_1Mjdzux3BaZRh3toHM",
    isGuest: "no",
    // eventId: 1,
  });
  users.push(claire);

  const event = await Event.create({
    name: "Barry's Bootcamp",
    description: "Best workout in the world",
    category: "Fitness",
    address: "419 Lafayette St, New York, NY 10003",
    date: "Monday, September 4th: 09/04/2020",
    time: "08:00 AM",
    imgUrl:
      "https://i0.wp.com/lexiholden.com/wp-content/uploads/2017/07/Barrys.jpg?fit=600%2C447&ssl=1",
    userId: 1,
    hostId: 1,
  });

  const event2 = await Event.create({
    name: "Larry's Bootcamp",
    description: "The best workout in the world",
    category: "Fitness",
    address: "419 Lafayette St, New York, NY 10003",
    date: "Monday, September 4th: 09/04/2020",
    time: "08:00 AM",
    imgUrl:
      "https://i0.wp.com/lexiholden.com/wp-content/uploads/2017/07/Barrys.jpg?fit=600%2C447&ssl=1",
    userId: 2,
    hostId: 2,
  });

  events.push(event);
  events.push(event2);

  await Promise.all(
    activities.map((activity) => {
      return Activity.create(activity);
    })
  );
  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}
// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
