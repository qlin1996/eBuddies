"use strict";
const db = require("../db");
const { User, Event, Activity, Messages, Interest } = require("../db/models");
const faker = require("faker");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  const users = [];
  const events = [];
  const messages = [];
  const interests = [];
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
      zipCode: "12345",
      // imgUrl,
      // userId: id + 1,
      // eventId: 1,
    });
    users.push(user.dataValues);
  }

  //USER INFO FOR CLAIRE
  const claire = await User.create({
    firstName: "Claire",
    lastName: "Giordano",
    description:
      "A fordham student looking to find fun workout classes in nyc & quiet coffee shops for studying ",
    email: "Cgiordano1@gmail.com",
    streetAddress: "1821 claire drive",
    city: "New York",
    state: "New York",
    zipCode: "10019",
    password: "Claire",
    imgUrl:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFXsmj2gUhdBA/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=ehdUywqM6iY3w3AG96LflI_5_1Mjdzux3BaZRh3toHM",
    isGuest: "no",
  });

  //USER INFO FOR Q
  const qi = await User.create({
    firstName: "Qi",
    lastName: "Lin",
    description: "Q's description here",
    email: "Q1@gmail.com",
    streetAddress: "Q's address here",
    city: "New York",
    state: "New York",
    zipCode: "10019",
    password: "Qi",
    imgUrl: "https://ca.slack-edge.com/T024FPYBQ-U015BBESASE-affe9133d7a4-512",
    isGuest: "no",
    // eventId: 1,
  });
  users.push(qi);

  //USER INFO FOR BLAKE
  const blake = await User.create({
    firstName: "Blake",
    lastName: "Ferm",
    description: "Blakes's description here",
    email: "Blake1@gmail.com",
    streetAddress: "Blake's address here",
    city: "New York",
    state: "New York",
    zipCode: "10019",
    password: "Blake",
    imgUrl: "https://ca.slack-edge.com/T024FPYBQ-U01223LJ6TC-2a445d981f58-512",
    isGuest: "no",
    // eventId: 1,
  });
  users.push(blake);

  //USER INFO FOR ANDERSON
  const anderson = await User.create({
    firstName: "Anderson",
    lastName: "Quiñones",
    description: "Anderson's description here",
    email: "Anderson1@gmail.com",
    streetAddress: "Anderson's address here",
    city: "New York",
    state: "New York",
    zipCode: "10019",
    password: "Anderson",
    imgUrl: "https://ca.slack-edge.com/T024FPYBQ-UVDH49WAZ-2755e5ff7bb7-512",
    isGuest: "no",
    // eventId: 1,
  });
  users.push(anderson);

  //INTERESTS
  const CGinterest1 = await Interest.create({
    userInterest: "Food",
    userId: 101,
  });
  interests.push(CGinterest1);
  const CGinterest2 = await Interest.create({
    userInterest: "Fitness",
    userId: 101,
  });
  interests.push(CGinterest2);
  const CGinterest3 = await Interest.create({
    userInterest: "Education",
    userId: 101,
  });
  interests.push(CGinterest3);

  //BARRYS EVENT
  const event = await Event.create({
    name: "Barry's Bootcamp",
    description: "Great class and love the vibe!",
    address: "419 Lafayette St, New York, NY 10003",
    date: "09/04/2020",
    time: "08:00 AM",
    imgUrl:
      "https://i0.wp.com/lexiholden.com/wp-content/uploads/2017/07/Barrys.jpg?fit=600%2C447&ssl=1",
    userId: 101,
    hostId: 1,
  });

  const event2 = await Event.create({
    name: "Larry's Bootcamp",
    description: "The best workout in the world",
    category: "Fitness",
    address: "41 Broom St, New York, NY 10003",
    date: "10/12/2020",
    time: "09:00 AM",
    imgUrl:
      "https://whateveryourdose.com/wp-content/uploads/2016/10/barrys-bootcamp-class.jpg",
    userId: 2,
    hostId: 2,
  });

  events.push(event);

  const mesagge = await Messages.create({
    message: "Hey",
    userId: 1,
  });
  messages.push(mesagge);

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
