"use strict";

const { Comment } = require("../models");

const comments = [
  {
    userId: 1,
    songId: 1,
    body: "test",
  },
  {
    userId: 2,
    songId: 2,
    body: "test",
  },
  {
    userId: 3,
    songId: 3,
    body: "test",
  },
  {
    userId: 4,
    songId: 4,
    body: "test",
  },
  {
    userId: 5,
    songId: 5,
    body: "test",
  },
  {
    userId: 1,
    songId: 6,
    body: "test",
  },
  {
    userId: 2,
    songId: 7,
    body: "test",
  },
  {
    userId: 3,
    songId: 8,
    body: "test",
  },
  {
    userId: 4,
    songId: 9,
    body: "test",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Comment.bulkCreate(comments, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
