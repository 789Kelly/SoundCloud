"use strict";

const { Album } = require("../models");

const albums = [
  {
    userId: 1,
    title: "Album One",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    imageUrl: "imageUrl",
  },
  {
    userId: 2,
    title: "Album Two",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    imageUrl: "imageUrl",
  },
  {
    userId: 3,
    title: "Album Three",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    imageUrl: "imageUrl",
  },
  {
    userId: 4,
    title: "Album Four",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    imageUrl: "imageUrl",
  },
  {
    userId: 5,
    title: "Album Five",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    imageUrl: "imageUrl",
  },
  {
    userId: 1,
    title: "Album Six",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    imageUrl: "imageUrl",
  },
  {
    userId: 2,
    title: "Album Seven",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    imageUrl: "imageUrl",
  },
  {
    userId: 3,
    title: "Album Eight",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    imageUrl: "imageUrl",
  },
  {
    userId: 4,
    title: "Album Nine",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    imageUrl: "imageUrl",
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
