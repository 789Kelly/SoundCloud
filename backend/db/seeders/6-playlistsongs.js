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
    songId: 10,
    playlistId: 10,
  },
  {
    songId: 11,
    playlistId: 1,
  },
  {
    songId: 12,
    playlistId: 2,
  },
  {
    songId: 13,
    playlistId: 3,
  },
  {
    songId: 14,
    playlistId: 4,
  },
  {
    songId: 15,
    playlistId: 5,
  },
  {
    songId: 16,
    playlistId: 6,
  },
  {
    songId: 17,
    playlistId: 7,
  },
  {
    songId: 18,
    playlistId: 8,
  },
  {
    songId: 19,
    playlistId: 9,
  },
  {
    songId: 20,
    playlistId: 10,
  },
  {
    songId: 21,
    playlistId: 1,
  },
  {
    songId: 22,
    playlistId: 2,
  },
  {
    songId: 23,
    playlistId: 3,
  },
  {
    songId: 24,
    playlistId: 4,
  },
  {
    songId: 25,
    playlistId: 5,
  },
  {
    songId: 26,
    playlistId: 6,
  },
  {
    songId: 27,
    playlistId: 7,
  },
  {
    songId: 28,
    playlistId: 8,
  },
  {
    songId: 29,
    playlistId: 9,
  },
  {
    songId: 30,
    playlistId: 10,
  },
  {
    songId: 31,
    playlistId: 1,
  },
  {
    songId: 32,
    playlistId: 2,
  },
  {
    songId: 33,
    playlistId: 3,
  },
  {
    songId: 34,
    playlistId: 4,
  },
  {
    songId: 35,
    playlistId: 5,
  },
  {
    songId: 36,
    playlistId: 6,
  },
  {
    songId: 37,
    playlistId: 7,
  },
  {
    songId: 38,
    playlistId: 8,
  },
  {
    songId: 39,
    playlistId: 9,
  },
  {
    songId: 40,
    playlistId: 10,
  },
  {
    songId: 41,
    playlistId: 1,
  },
  {
    songId: 42,
    playlistId: 2,
  },
  {
    songId: 43,
    playlistId: 3,
  },
  {
    songId: 44,
    playlistId: 4,
  },
  {
    songId: 45,
    playlistId: 5,
  },
  {
    songId: 46,
    playlistId: 6,
  },
  {
    songId: 47,
    playlistId: 7,
  },
  {
    songId: 48,
    playlistId: 8,
  },
  {
    songId: 49,
    playlistId: 9,
  },
  {
    songId: 50,
    playlistId: 10,
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
