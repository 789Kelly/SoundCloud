"use strict";

const { Playlist } = require("../models");

const playlists = [
  {
    userId: 1,
    name: "Female Singer Songwriters Playlist",
    imageUrl: "https://images.app.goo.gl/Px3czuicikv6ovaEA",
  },
  {
    userId: 2,
    name: "Classic Canadian Rock",
    imageUrl: "https://images.app.goo.gl/v7DEQ7CpEqP4QaaK9",
  },
  {
    userId: 3,
    name: "Instrumental Acoustic Guitar Playlist",
    imageUrl: "https://images.app.goo.gl/75tHPviH5kZRKxmj8",
  },
  {
    userId: 4,
    name: "The Best of Bluegrass",
    imageUrl: "https://images.app.goo.gl/dKrWw37PeGsr73UFA",
  },
  {
    userId: 5,
    name: "New Rock Alternative",
    imageUrl: "https://images.app.goo.gl/Z7KTiy9QR4FxnRFBA",
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
