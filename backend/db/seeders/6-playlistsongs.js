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
  {
    songId: 6,
    playlistId: 6,
  },
  {
    songId: 7,
    playlistId: 7,
  },
  {
    songId: 8,
    playlistId: 8,
  },
  {
    songId: 9,
    playlistId: 9,
  },
  {
    songId: 1,
    playlistId: 10,
  },
  {
    songId: 2,
    playlistId: 11,
  },
  {
    songId: 3,
    playlistId: 12,
  },
  {
    songId: 4,
    playlistId: 14,
  },
  {
    songId: 5,
    playlistId: 15,
  },
  {
    songId: 6,
    playlistId: 16,
  },
  {
    songId: 7,
    playlistId: 17,
  },
  {
    songId: 8,
    playlistId: 18,
  },
  {
    songId: 9,
    playlistId: 19,
  },
  {
    songId: 1,
    playlistId: 2,
  },
  {
    songId: 2,
    playlistId: 3,
  },
  {
    songId: 3,
    playlistId: 4,
  },
  {
    songId: 4,
    playlistId: 5,
  },
  {
    songId: 5,
    playlistId: 6,
  },
  {
    songId: 6,
    playlistId: 7,
  },
  {
    songId: 7,
    playlistId: 8,
  },
  {
    songId: 8,
    playlistId: 9,
  },
  {
    songId: 9,
    playlistId: 10,
  },
  {
    songId: 1,
    playlistId: 11,
  },
  {
    songId: 2,
    playlistId: 12,
  },
  {
    songId: 3,
    playlistId: 14,
  },
  {
    songId: 4,
    playlistId: 15,
  },
  {
    songId: 5,
    playlistId: 16,
  },
  {
    songId: 6,
    playlistId: 17,
  },
  {
    songId: 7,
    playlistId: 18,
  },
  {
    songId: 8,
    playlistId: 19,
  },
  {
    songId: 9,
    playlistId: 1,
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
