"use strict";

const { Song } = require("../models");

const songs = [
  {
    userId: 1,
    albumId: 1,
    title: "What's Going On",
    description: "Marvin Gaye",
    url: "https://www.youtube.com/embed/H-kA3UtBj4M",
    imageUrl: "https://m.media-amazon.com/images/I/719kIe1npJL._SL1200_.jpg",
  },
  {
    userId: 2,
    albumId: 2,
    title: "Wouldn't It Be Nice",
    description: "The Beach Boys",
    url: "https://www.youtube.com/embed/3y44BJgkdZs",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/bb/PetSoundsCover.jpg",
  },
  {
    userId: 3,
    albumId: 3,
    title: "All I Want",
    description: "Joni Mitchell",
    url: "https://www.youtube.com/embed/r6NZ_2TuLf8",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e1/Bluealbumcover.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Love's in Need of Love Today",
    description: "Stevie Wonder",
    url: "https://www.youtube.com/embed/EyTaepxQxH4",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e2/Songs_in_the_key_of_life.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Come Together",
    description: "The Beatles",
    url: "https://www.youtube.com/embed/45cYwDMibGo",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
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
