"use strict";

const { Playlist } = require("../models");

const playlists = [
  {
    userId: 1,
    name: "playlist one",
    imageUrl: "test1",
  },
  {
    userId: 2,
    name: "playlist two",
    imageUrl: "test2",
  },
  {
    userId: 3,
    name: "playlist three",
    imageUrl: "test3",
  },
  {
    userId: 4,
    name: "playlist four",
    imageUrl: "test4",
  },
  {
    userId: 5,
    name: "playlist five",
    imageUrl: "test5",
  },
  {
    userId: 1,
    name: "playlist six",
    imageUrl: "test6",
  },
  {
    userId: 2,
    name: "playlist seven",
    imageUrl: "test7",
  },
  {
    userId: 3,
    name: "playlist eight",
    imageUrl: "test8",
  },
  {
    userId: 4,
    name: "playlist nine",
    imageUrl: "test9",
  },
  {
    userId: 5,
    name: "playlist ten",
    imageUrl: "test10",
  },
  {
    userId: 1,
    name: "playlist eleven",
    imageUrl: "test11",
  },
  {
    userId: 2,
    name: "playlist twelve",
    imageUrl: "test12",
  },
  {
    userId: 3,
    name: "playlist fourteen",
    imageUrl: "test14",
  },
  {
    userId: 4,
    name: "playlist fifteen",
    imageUrl: "test15",
  },
  {
    userId: 5,
    name: "playlist sixteen",
    imageUrl: "test16",
  },
  {
    userId: 1,
    name: "playlist seventeen",
    imageUrl: "test17",
  },
  {
    userId: 2,
    name: "playlist eighteen",
    imageUrl: "test18",
  },
  {
    userId: 3,
    name: "playlist nineteen",
    imageUrl: "test19",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Playlist.bulkCreate(playlists, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Playlists", null, {});
  },
};
