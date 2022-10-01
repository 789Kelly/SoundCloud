"use strict";

const { Album } = require("../models");

const albums = [
  {
    userId: 1,
    title: "What's Going On",
    description: "Marvin Gaye",
    imageUrl: "https://m.media-amazon.com/images/I/719kIe1npJL._SL1200_.jpg",
  },
  {
    userId: 2,
    title: "Pet Sounds",
    description: "The Beach Boys",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/bb/PetSoundsCover.jpg",
  },
  {
    userId: 3,
    title: "Blue",
    description: "Joni Mitchell",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e1/Bluealbumcover.jpg",
  },
  {
    userId: 4,
    title: "Songs in the Key of Life",
    description: "Stevie Wonder",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e2/Songs_in_the_key_of_life.jpg",
  },
  {
    userId: 5,
    title: "Abbey Road",
    description: "The Beatles",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Album.bulkCreate(albums, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Albums", null, {});
  },
};
