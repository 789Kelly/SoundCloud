"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Philippa",
          lastName: "Alessandri",
          email: "demo@user.io",
          username: "Demo-lition",
          password: bcrypt.hashSync("password"),
          previewImage:
            "https://i1.sndcdn.com/avatars-000619340277-fkzeve-t500x500.jpg",
        },
        {
          firstName: "Lyubochka",
          lastName: "Devlin",
          email: "user1@user.io",
          username: "FakeUser1",
          password: bcrypt.hashSync("password2"),
          previewImage:
            "https://i1.sndcdn.com/avatars-SHeb8xVM39UBG156-ICmzSQ-t500x500.jpg",
        },
        {
          firstName: "Cedomir",
          lastName: "Vasylyk",
          email: "user2@user.io",
          username: "FakeUser2",
          password: bcrypt.hashSync("password3"),
          previewImage:
            "https://m.media-amazon.com/images/M/MV5BNjA4ODExMzMtMWRkMS00NWNlLWE1YmEtYWRkOTcxZmI1ZWYyXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
        },
        {
          firstName: "Fredrik",
          lastName: "Begam",
          email: "user3@user.io",
          username: "FakeUser3",
          password: bcrypt.hashSync("password4"),
          previewImage:
            "https://www.bravotv.com/sites/bravo/files/2021/08/mdla-season-13-fredrik-eklund-headshot.jpg",
        },
        {
          firstName: "Drahomir",
          lastName: "Jankauskas",
          email: "user4@user.io",
          username: "FakeUser4",
          password: bcrypt.hashSync("password5"),
          previewImage:
            "https://i1.sndcdn.com/avatars-000337623724-md3dxf-t500x500.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: {
          [Op.in]: [
            "Demo-lition",
            "FakeUser1",
            "FakeUser2",
            "FakeUser3",
            "FakeUser4",
          ],
        },
      },
      {}
    );
  },
};
