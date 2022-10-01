"use strict";

const { Album } = require("../models");

const albums = [
  {
    userId: 1,
    title: "What's Going On",
    description: "Marvin Gaye",
    imageUrl: "https://images.app.goo.gl/HjC4ZE65d1rzPXmx6",
  },
  {
    userId: 2,
    title: "Pet Sounds",
    description: "The Beach Boys",
    imageUrl: "https://images.app.goo.gl/JczMJVi65SdCG6q18",
  },
  {
    userId: 3,
    title: "Blue",
    description: "Joni Mitchell",
    imageUrl: "https://images.app.goo.gl/bXpDCVVYKuGxSNGz8",
  },
  {
    userId: 4,
    title: "Songs in the Key of Life",
    description: "Stevie Wonder",
    imageUrl: "https://images.app.goo.gl/MdsyVAcDPvLsik7D9",
  },
  {
    userId: 5,
    title: "Abbey Road",
    description: "The Beatles",
    imageUrl: "https://images.app.goo.gl/hwL47Wj6uiog3JaS6",
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
