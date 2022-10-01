"use strict";

const { PlaylistSong } = require("../models");

const playlistSongs = [
  {
    songId: 1,
    playlistId: 1,
  },
  {
    songId: 2,
    playlistId: 2,
  },
  {
    songId: 3,
    playlistId: 3,
  },
  {
    songId: 4,
    playlistId: 4,
  },
  {
    songId: 5,
    playlistId: 5,
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await PlaylistSong.bulkCreate(playlistSongs, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PlaylistSongs", null, {});
  },
};
