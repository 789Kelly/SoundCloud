"use strict";

const { Song } = require("../models");

const songs = [
  {
    userId: 1,
    albumId: 1,
    title: "What's Going On",
    description: "Marvin Gaye",
    url: "https://www.youtube.com/embed/H-kA3UtBj4M",
    imageUrl: "https://images.app.goo.gl/WWWRD6RwQo5yXj8QA",
  },
  {
    userId: 2,
    albumId: 2,
    title: "Wouldn't It Be Nice",
    description: "The Beach Boys",
    url: "https://www.youtube.com/embed/3y44BJgkdZs",
    imageUrl: "https://images.app.goo.gl/JczMJVi65SdCG6q18",
  },
  {
    userId: 3,
    albumId: 3,
    title: "All I Want",
    description: "Joni Mitchell",
    url: "https://www.youtube.com/embed/r6NZ_2TuLf8",
    imageUrl: "https://images.app.goo.gl/bXpDCVVYKuGxSNGz8",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Love's in Need of Love Today",
    description: "Stevie Wonder",
    url: "https://www.youtube.com/embed/EyTaepxQxH4",
    imageUrl: "https://images.app.goo.gl/MdsyVAcDPvLsik7D9",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Come Together",
    description: "The Beatles",
    url: "https://www.youtube.com/embed/45cYwDMibGo",
    imageUrl: "https://images.app.goo.gl/hwL47Wj6uiog3JaS6",
  },
  {
    userId: 1,
    albumId: 1,
    title: "Smells Like Teen Spirit",
    description: "Nirvana",
    url: "https://www.youtube.com/embed/hTWKbfoikeg",
    imageUrl: "https://images.app.goo.gl/Eybh7B6FyUtJhhby5",
  },
  {
    userId: 2,
    albumId: 2,
    title: "I Don't Want to Know",
    description: "Fleetwood Mac",
    url: "https://www.youtube.com/embed/-V8RrL_TJ68",
    imageUrl: "https://images.app.goo.gl/yowW5WMwBJmkmUxU7",
  },
  {
    userId: 3,
    albumId: 3,
    title: "Let's Go Crazy",
    description: "Prince and the Revolution",
    url: "https://www.youtube.com/embed/aXJhDltzYVQ",
    imageUrl: "https://images.app.goo.gl/oSRdAft6JmgpAwUd8",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Tangled Up in Blue",
    description: "Bob Dylan",
    url: "https://www.youtube.com/embed/YwSZvHqf9qM",
    imageUrl: "https://images.app.goo.gl/47pMoGxmEtZgJigDA",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Intro (Roll Call)",
    description: "Lauryn Hill",
    url: "https://www.youtube.com/embed/73PznUABFJE",
    imageUrl: "https://images.app.goo.gl/ab7L6cbQcQjStX7e9",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Song.bulkCreate(songs, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Songs", null, {});
  },
};
