"use strict";
const db = require("../db");
const { User, Event, Activity, Message, Interest } = require("../db/models");

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

  //USER INFO FOR CLAIRE
  const claire = await User.create({
    firstName: "Claire",
    lastName: "Giordano",
    description:
      "A fordham student looking to find fun workout classes in nyc & quiet coffee shops for studying ",
    email: "Cgiordano1@gmail.com",
    city: "New York",
    state: "NY",
    zipCode: "10019",
    password: "Claire",
    imgUrl:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFXsmj2gUhdBA/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=ehdUywqM6iY3w3AG96LflI_5_1Mjdzux3BaZRh3toHM",
    pushToken: "ExponentPushToken[NA_5A_L3ThvvLenHPwiOKJ]",
  });
  users.push(claire);

  //USER INFO FOR Q
  const qi = await User.create({
    firstName: "Qi",
    lastName: "Lin",
    description: "Q's description here",
    email: "Q1@gmail.com",
    city: "New York",
    state: "NY",
    zipCode: "10019",
    password: "Qi",
    imgUrl: "https://ca.slack-edge.com/T024FPYBQ-U015BBESASE-affe9133d7a4-512",
    pushToken: "ExponentPushToken[NA_5A_L3ThvvLenHPwiOKJ]",
  });
  users.push(qi);

  //USER INFO FOR BLAKE
  const blake = await User.create({
    firstName: "Blake",
    lastName: "Ferm",
    description: "Blakes's description here",
    email: "b@gmail.com",
    city: "New York",
    state: "NY",
    zipCode: "10019",
    password: "b",
    imgUrl: "https://ca.slack-edge.com/T024FPYBQ-U01223LJ6TC-2a445d981f58-512",
    pushToken: "ExponentPushToken[NA_5A_L3ThvvLenHPwiOKJ]",
  });
  users.push(blake);

  //USER INFO FOR ANDERSON
  const anderson = await User.create({
    firstName: "Anderson",
    lastName: "Quiñones",
    description: "Anderson's description here",
    email: "a@gmail.com",
    city: "New York",
    state: "NY",
    zipCode: "10019",
    password: "a",
    imgUrl: "https://ca.slack-edge.com/T024FPYBQ-UVDH49WAZ-2755e5ff7bb7-512",
    pushToken: "ExponentPushToken[NA_5A_L3ThvvLenHPwiOKJ]",
  });
  users.push(anderson);

  //USER ACCOUNT FOR DAN
  const dan = await User.create({
    firstName: "Dan",
    lastName: "S",
    description:
      "A fordham student looking to find fun workout classes in nyc & quiet coffee shops for studying ",
    email: "D1@gmail.com",
    city: "New York",
    state: "NY",
    zipCode: "10019",
    password: "Dan",
    imgUrl: "https://ca.slack-edge.com/T024FPYBQ-UUNC6D6KF-ead95d00d503-512",
    pushToken: "ExponentPushToken[NA_5A_L3ThvvLenHPwiOKJ]",
  });
  users.push(dan);

  //INTERESTS
  const CGinterest1 = await Interest.create({
    userInterest: "Food",
    userId: 1,
  });
  interests.push(CGinterest1);
  const CGinterest2 = await Interest.create({
    userInterest: "Fitness",
    userId: 1,
  });
  interests.push(CGinterest2);
  const CGinterest3 = await Interest.create({
    userInterest: "Education",
    userId: 1,
  });
  interests.push(CGinterest3);

  //FITNESS
  const fitness1 = await Event.create({
    name: "Barry's Bootcamp",
    description: "Best workout in the world.",
    address: "419 Lafayette Street",
    city: "New York",
    state: "NY",
    zipCode: "10003",
    date: "Sun 06 Sep 2020",
    time: "22:20:00 GMT-0400 (EDT)",
    category: "Fitness",
    imgUrl:
      "https://i0.wp.com/lexiholden.com/wp-content/uploads/2017/07/Barrys.jpg?fit=600%2C447&ssl=1",
    userId: 2,
    hostId: 1,
    latitude: 40.7286,
    longitude: -73.9922,
  });

  const fitness2 = await Event.create({
    name: "Switch Playground",
    description: "DJ music & dramatic lighting sets the scene at this hip gym.",
    category: "Fitness",
    address: "130 E 12th Street",
    city: "New York",
    state: "NY",
    zipCode: "10003",
    date: "Sun 06 Sep 2020",
    time: "21:56:00 GMT-0400 (EDT)",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSefez5wycJVaPtrsiM4CMTCc7h2kjLhrOiog&usqp=CAU",
    userId: 4,
    hostId: 2,
    latitude: 40.732069,
    longitude: -73.988587,
  });

  const fitness3 = await Event.create({
    name: "Rumble",
    description: "Rumble Training is a treadmill and strength-based workout.",
    category: "Fitness",
    address: "49 W 23rd Street",
    city: "New York",
    state: "NY",
    zipCode: "10010",
    date: "Mon 14 Sep 2020",
    time: "10:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRixe22DVpUZ9KzMpA6zVVR67p8jarPQIUMLQ&usqp=CAU",
    userId: 1,
    hostId: 2,
    latitude: 40.742554,
    longitude: -73.991382,
  });

  const fitness4 = await Event.create({
    name: "Yoga Spark",
    description: "We play music that’ll make you want to move. ",
    category: "Fitness",
    address: "158 Duane Street",
    city: "New York",
    state: "NY",
    zipCode: "10013",
    date: "Sat 17 Oct 2020",
    time: "11:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://s2.r29static.com/bin/entry/191/720x600,85/1828213/image.webp",
    userId: 1,
    hostId: 3,
    latitude: 40.716656,
    longitude: -74.00876,
  });

  const fitness5 = await Event.create({
    name: "Exhale – Exhale HIIT",
    description: "Upscale wellness studio with barre, cardio & yoga classes.",
    category: "Fitness",
    address: "50 Central Park S",
    city: "New York",
    state: "NY",
    zipCode: "10019",
    date: "Sat 10 Oct 2020",
    time: "7:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://www.exhalespa.com/sites/exhale-spa/files/fitness_classes/classcard-exhalehiit30.classesWidget.jpg",
    userId: 1,
    hostId: 4,
    latitude: 40.76623,
    longitude: -73.977746,
  });

  const fitness6 = await Event.create({
    name: "Soul Cycle",
    description: "SoulCycle is more than just a workout.",
    category: "Fitness",
    address: "Bryant Park 41 Street",
    city: "New York",
    state: "NY",
    zipCode: "10018",
    date: "Mon 02 Nov 2020",
    time: "08:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://www.washingtonian.com/wp-content/uploads/2014/11/2014-11-13.soulcycle2.jpg",
    userId: 1,
    hostId: 4,
    latitude: 40.754363,
    longitude: -73.985286,
  });

  //FOOD
  const food1 = await Event.create({
    name: "Momofuku Kāwi",
    description: "New York’s modern Korean movement at Kāwi.",
    category: "Food",
    address: "20 Hudson Yards",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    date: "Tue 13 Oct 2020",
    time: "18:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://cdn.vox-cdn.com/thumbor/9LzonUzPK8rmiDNaDFwbX4Vt-Yk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/15961271/Kawi_5.jpg",
    userId: 4,
    hostId: 1,
    latitude: 40.753802,
    longitude: -74.00032,
  });

  const food2 = await Event.create({
    name: "Cote",
    description: "Guests cook their own dry-aged steaks on tabletop grills.",
    category: "Food",
    address: "16 W 22nd Street",
    city: "New York",
    state: "NY",
    zipCode: "10010",
    date: "Tue 06 Oct 2020",
    time: "22:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://images.ctfassets.net/7m90b3o5uk7x/nO9VBVHWoKeE6YQYK6ymY/071c2374fe487abd3dfe0d310d44d092/intersitial-three.jpg",
    userId: 1,
    hostId: 2,
    latitude: 40.7413,
    longitude: -73.991297,
  });

  const food3 = await Event.create({
    name: "Pizza Beach",
    description: "Wood-fired pies, pastas & veggie dishes.",
    category: "Food",
    address: "167 Orchard Street",
    city: "New York",
    state: "NY",
    zipCode: "10002",
    date: "Mon 16 Nov 2020",
    time: "13:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://cdn.vox-cdn.com/thumbor/OYm9rG5J6SJM_Cd3p8ebHiIXuTY=/0x0:5823x3890/1400x1400/filters:focal(2446x1480:3376x2410):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47518355/Pizza_Beach_LES-10.0.0.jpg",
    userId: 1,
    hostId: 4,
    latitude: 40.721564,
    longitude: -73.98878,
  });

  const food4 = await Event.create({
    name: "Eataly",
    description: "Overlooks the iconic backdrop of the historic district.",
    category: "Food",
    address: "200 5th Ave",
    city: "New York",
    state: "NY",
    zipCode: "10003",
    date: "Mon 23 Nov 2020",
    time: "21:00:00 GMT-0400 (EDT)",
    imgUrl: "https://media.timeout.com/images/105442066/image.jpg",
    userId: 1,
    hostId: 3,
  });

  const food5 = await Event.create({
    name: "Manhattan",
    description: "High-end restaurant features American cuisine & city views.",
    category: "Food",
    address: "28 Liberty Street",
    city: "New York",
    state: "NY",
    zipCode: "10053",
    date: "Mon 16 Nov 2020",
    time: "22:00:00 GMT-0400 (EDT)",
    imgUrl: "https://media.timeout.com/images/105451946/630/472/image.jpg",
    userId: 3,
    hostId: 1,
    latitude: 40.708176,
    longitude: -74.008915,
  });

  //EDUCATION
  const education1 = await Event.create({
    name: "NY Study Room",
    description: "A quiet, peaceful place to study with unlimited seating.",
    category: "Education",
    address: "312 5th Ave",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    date: "Fri 04 Dec 2020",
    time: "12:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://www.tun.com/blog/wp-content/uploads/2016/03/NY-Public-Library-NewYorkMania-9072.jpg",
    userId: 1,
    hostId: 2,
    latitude: 40.747125,
    longitude: -73.985964,
  });

  const education2 = await Event.create({
    name: "Ground Central Coffee Company",
    description: "Coffee shop, comfortable place to study in NYC.",
    category: "Education",
    address: "155 East 52nd Street",
    city: "New York",
    state: "NY",
    zipCode: "10019",
    date: "Sat 19 Dec 2020",
    time: "07:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://static1.squarespace.com/static/ta/58ee7cf9db29d6de1df46651/189/assets/img/photos/gc5/003.jpg",
    userId: 2,
    hostId: 1,
    latitude: 40.757471,
    longitude: -73.97037,
  });

  const education3 = await Event.create({
    name: "Fordham Lincoln Center",
    description: "On request- Room Reservation at the University Libraries",
    category: "Education",
    address: " 113 W 60th Street",
    city: "New York",
    state: "NY",
    zipCode: "10023",
    date: "Sat 12 Dec 2020",
    time: "09:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://news.fordham.edu/wp-content/uploads/2019/09/Lincoln-Center-fall-1078.jpg",
    userId: 1,
    hostId: 3,
    latitude: 40.771454,
    longitude: -73.98434,
  });

  //ENTERTAINMENT
  const entertainment1 = await Event.create({
    name: "Angela's Wedding",
    description:
      "Join Angela in celebrating at her wedding!!!! (Event of the year) ",
    category: "Entertainment",
    address: "45 Downing Street",
    city: "New York",
    state: "NY",
    zipCode: "10019",
    date: "Mon 09 Nov 2020",
    time: "20:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_t8batvNXd4ERMcJl1h0G3Cfhe_aqXqmzTg&usqp=CAU",
    userId: 3,
    hostId: 1,
    latitude: 40.782746,
    longitude: -73.966496,
  });

  const entertainment2 = await Event.create({
    name: "Kanye Concert",
    description: "Kanye Omari West is an American rapper.",
    category: "Entertainment",
    address: "4 Pennsylvania Plaza",
    city: "New York",
    state: "NY",
    zipCode: "10003",
    date: "Tue 15 Sep 2020",
    time: "23:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://static.billboard.com/files/media/Kanye-West-forum-calif-2016-nov-billboard-1548-1024x677.jpg",
    userId: 1,
    hostId: 2,
    latitude: 40.750634,
    longitude: -73.993512,
  });

  const entertainment3 = await Event.create({
    name: "SantaCon 2020",
    description: "SantaCon is an annual pub crawl.",
    category: "Entertainment",
    address: "162 West 4th Street",
    city: "New York",
    state: "NY",
    zipCode: "10019",
    date: "Tue 15 Sep 2020",
    time: "12:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAMnxkkcMA63Bm8CD5JgV223nOzRfw-kgyQA&usqp=CAU",
    userId: 1,
    hostId: 3,
    latitude: 40.730072,
    longitude: -73.951032,
  });
  const entertainment4 = await Event.create({
    name: "Claire's Dinner Party",
    description: "Claire generously invites you to dine at her home in NJ.",
    category: "Entertainment",
    address: "2100 NJ-35",
    city: "Sea Girt",
    state: "NJ",
    zipCode: "08750",
    date: "Fri 04 Sep 2020",
    time: "22:00:00 GMT-0400 (EDT)",
    imgUrl:
      "https://i.insider.com/5d2798f9a17d6c45e50f623a?width=1100&format=jpeg&auto=webp",
    userId: 3,
    hostId: 4,
    pushToken: "ExponentPushToken[NA_5A_L3ThvvLenHPwiOKJ]",
    latitude: 50.073193,
    longitude: 14.351719,
  });

  //FITNESS
  events.push(fitness1);
  events.push(fitness2);
  events.push(fitness3);
  events.push(fitness4);
  events.push(fitness5);
  events.push(fitness6);

  //FOOD
  events.push(food1);
  events.push(food2);
  events.push(food3);
  events.push(food4);
  events.push(food5);

  //EDUCATION
  events.push(education1);
  events.push(education2);
  events.push(education3);

  //ENTERTAINMENT
  events.push(entertainment1);
  events.push(entertainment2);
  events.push(entertainment3);
  events.push(entertainment4);

  const message = await Message.create({
    message: "This is a hard coded message in the db.",
    senderId: 4,
    eventId: 1,
  });

  messages.push(message);
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

module.exports = seed;
