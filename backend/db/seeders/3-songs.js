"use strict";

const { Venue } = require("../models");

const venues = [
  {
    userId: 1,
    albumId: 1,
    title: "Amor Dulce Amargo",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    url: "url",
    imageUrl: "imageUrl",
  },
  {
    userId: 2,
    albumId: 2,
    title: "Hermanita",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    url: "url",
    imageUrl: "imageUrl",
  },
  {
    userId: 3,
    albumId: 3,
    title: "Finesse",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    url: "url",
    imageUrl: "imageUrl",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Fall",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    url: "url",
    imageUrl: "imageUrl",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Forever Tippin",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    url: "url",
    imageUrl: "imageUrl",
  },
  {
    userId: 1,
    albumId: 6,
    title: "My Love",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    url: "url",
    imageUrl: "imageUrl",
  },
  {
    userId: 2,
    albumId: 7,
    title: "If",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    url: "url",
    imageUrl: "imageUrl",
  },
  {
    userId: 3,
    albumId: 8,
    title: "Aza",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    url: "url",
    imageUrl: "imageUrl",
  },
  {
    userId: 4,
    albumId: 9,
    title: "Jowo",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    url: "url",
    imageUrl: "imageUrl",
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
