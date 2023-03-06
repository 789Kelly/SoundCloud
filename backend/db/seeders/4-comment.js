"use strict";

const { Comment } = require("../models");

const comments = [
  {
    userId: 1,
    songId: 1,
    body: "comment",
  },
  {
    userId: 2,
    songId: 2,
    body: "comment",
  },
  {
    userId: 3,
    songId: 3,
    body: "comment",
  },
  {
    userId: 4,
    songId: 4,
    body: "comment",
  },
  {
    userId: 5,
    songId: 5,
    body: "comment",
  },
  {
    userId: 1,
    songId: 6,
    body: "comment",
  },
  {
    userId: 2,
    songId: 7,
    body: "comment",
  },
  {
    userId: 3,
    songId: 8,
    body: "comment",
  },
  {
    userId: 4,
    songId: 9,
    body: "comment",
  },
  {
    userId: 5,
    songId: 10,
    body: "comment",
  },
  {
    userId: 1,
    songId: 11,
    body: "comment",
  },
  {
    userId: 2,
    songId: 12,
    body: "comment",
  },
  {
    userId: 3,
    songId: 13,
    body: "comment",
  },
  {
    userId: 4,
    songId: 14,
    body: "comment",
  },
  {
    userId: 5,
    songId: 15,
    body: "comment",
  },
  {
    userId: 1,
    songId: 16,
    body: "comment",
  },
  {
    userId: 2,
    songId: 17,
    body: "comment",
  },
  {
    userId: 3,
    songId: 18,
    body: "comment",
  },
  {
    userId: 4,
    songId: 19,
    body: "comment",
  },
  {
    userId: 5,
    songId: 20,
    body: "comment",
  },
  {
    userId: 1,
    songId: 21,
    body: "comment",
  },
  {
    userId: 2,
    songId: 22,
    body: "comment",
  },
  {
    userId: 3,
    songId: 23,
    body: "comment",
  },
  {
    userId: 4,
    songId: 24,
    body: "comment",
  },
  {
    userId: 5,
    songId: 25,
    body: "comment",
  },
  {
    userId: 1,
    songId: 26,
    body: "comment",
  },
  {
    userId: 2,
    songId: 27,
    body: "comment",
  },
  {
    userId: 3,
    songId: 28,
    body: "comment",
  },
  {
    userId: 4,
    songId: 29,
    body: "comment",
  },
  {
    userId: 5,
    songId: 30,
    body: "comment",
  },
  {
    userId: 1,
    songId: 31,
    body: "comment",
  },
  {
    userId: 2,
    songId: 32,
    body: "comment",
  },
  {
    userId: 3,
    songId: 33,
    body: "comment",
  },
  {
    userId: 4,
    songId: 34,
    body: "comment",
  },
  {
    userId: 5,
    songId: 35,
    body: "comment",
  },
  {
    userId: 1,
    songId: 36,
    body: "comment",
  },
  {
    userId: 2,
    songId: 37,
    body: "comment",
  },
  {
    userId: 3,
    songId: 38,
    body: "comment",
  },
  {
    userId: 4,
    songId: 39,
    body: "comment",
  },
  {
    userId: 5,
    songId: 40,
    body: "comment",
  },
  {
    userId: 1,
    songId: 41,
    body: "comment",
  },
  {
    userId: 2,
    songId: 42,
    body: "comment",
  },
  {
    userId: 3,
    songId: 43,
    body: "comment",
  },
  {
    userId: 4,
    songId: 44,
    body: "comment",
  },
  {
    userId: 5,
    songId: 45,
    body: "comment",
  },
  {
    userId: 1,
    songId: 46,
    body: "comment",
  },
  {
    userId: 2,
    songId: 47,
    body: "comment",
  },
  {
    userId: 3,
    songId: 48,
    body: "comment",
  },
  {
    userId: 4,
    songId: 49,
    body: "comment",
  },
  {
    userId: 5,
    songId: 50,
    body: "comment",
  },
  {
    userId: 1,
    songId: 51,
    body: "comment",
  },
  {
    userId: 2,
    songId: 52,
    body: "comment",
  },
  {
    userId: 3,
    songId: 53,
    body: "comment",
  },
  {
    userId: 4,
    songId: 54,
    body: "comment",
  },
  {
    userId: 5,
    songId: 55,
    body: "comment",
  },
  {
    userId: 1,
    songId: 56,
    body: "comment",
  },
  {
    userId: 2,
    songId: 57,
    body: "comment",
  },
  {
    userId: 3,
    songId: 58,
    body: "comment",
  },
  {
    userId: 4,
    songId: 59,
    body: "comment",
  },
  {
    userId: 5,
    songId: 60,
    body: "comment",
  },
  {
    userId: 1,
    songId: 61,
    body: "comment",
  },
  {
    userId: 2,
    songId: 62,
    body: "comment",
  },
  {
    userId: 3,
    songId: 63,
    body: "comment",
  },
  {
    userId: 4,
    songId: 64,
    body: "comment",
  },
  {
    userId: 5,
    songId: 65,
    body: "comment",
  },
  {
    userId: 1,
    songId: 66,
    body: "comment",
  },
  {
    userId: 2,
    songId: 67,
    body: "comment",
  },
  {
    userId: 3,
    songId: 68,
    body: "comment",
  },
  {
    userId: 4,
    songId: 69,
    body: "comment",
  },
  {
    userId: 5,
    songId: 70,
    body: "comment",
  },
  {
    userId: 1,
    songId: 71,
    body: "comment",
  },
  {
    userId: 2,
    songId: 72,
    body: "comment",
  },
  {
    userId: 3,
    songId: 73,
    body: "comment",
  },
  {
    userId: 4,
    songId: 74,
    body: "comment",
  },
  {
    userId: 5,
    songId: 75,
    body: "comment",
  },
  {
    userId: 1,
    songId: 76,
    body: "comment",
  },
  {
    userId: 2,
    songId: 77,
    body: "comment",
  },
  {
    userId: 3,
    songId: 78,
    body: "comment",
  },
  {
    userId: 4,
    songId: 79,
    body: "comment",
  },
  {
    userId: 5,
    songId: 80,
    body: "comment",
  },
  {
    userId: 1,
    songId: 81,
    body: "comment",
  },
  {
    userId: 2,
    songId: 82,
    body: "comment",
  },
  {
    userId: 3,
    songId: 83,
    body: "comment",
  },
  {
    userId: 4,
    songId: 84,
    body: "comment",
  },
  {
    userId: 5,
    songId: 85,
    body: "comment",
  },
  {
    userId: 1,
    songId: 86,
    body: "comment",
  },
  {
    userId: 2,
    songId: 87,
    body: "comment",
  },
  {
    userId: 3,
    songId: 88,
    body: "comment",
  },
  {
    userId: 4,
    songId: 89,
    body: "comment",
  },
  {
    userId: 5,
    songId: 90,
    body: "comment",
  },
  {
    userId: 1,
    songId: 91,
    body: "comment",
  },
  {
    userId: 2,
    songId: 92,
    body: "comment",
  },
  {
    userId: 3,
    songId: 93,
    body: "comment",
  },
  {
    userId: 4,
    songId: 94,
    body: "comment",
  },
  {
    userId: 5,
    songId: 95,
    body: "comment",
  },
  {
    userId: 1,
    songId: 96,
    body: "comment",
  },
  {
    userId: 2,
    songId: 97,
    body: "comment",
  },
  {
    userId: 3,
    songId: 98,
    body: "comment",
  },
  {
    userId: 4,
    songId: 99,
    body: "comment",
  },
  {
    userId: 5,
    songId: 100,
    body: "comment",
  },
  {
    userId: 1,
    songId: 101,
    body: "comment",
  },
  {
    userId: 2,
    songId: 102,
    body: "comment",
  },
  {
    userId: 3,
    songId: 103,
    body: "comment",
  },
  {
    userId: 4,
    songId: 104,
    body: "comment",
  },
  {
    userId: 5,
    songId: 105,
    body: "comment",
  },
  {
    userId: 1,
    songId: 106,
    body: "comment",
  },
  {
    userId: 2,
    songId: 107,
    body: "comment",
  },
  {
    userId: 3,
    songId: 108,
    body: "comment",
  },
  {
    userId: 4,
    songId: 109,
    body: "comment",
  },
  {
    userId: 5,
    songId: 110,
    body: "comment",
  },
  {
    userId: 1,
    songId: 111,
    body: "comment",
  },
  {
    userId: 2,
    songId: 112,
    body: "comment",
  },
  {
    userId: 3,
    songId: 113,
    body: "comment",
  },
  {
    userId: 4,
    songId: 114,
    body: "comment",
  },
  {
    userId: 5,
    songId: 115,
    body: "comment",
  },
  {
    userId: 1,
    songId: 116,
    body: "comment",
  },
  {
    userId: 2,
    songId: 117,
    body: "comment",
  },
  {
    userId: 3,
    songId: 118,
    body: "comment",
  },
  {
    userId: 4,
    songId: 119,
    body: "comment",
  },
  {
    userId: 5,
    songId: 120,
    body: "comment",
  },
  {
    userId: 1,
    songId: 121,
    body: "comment",
  },
  {
    userId: 2,
    songId: 122,
    body: "comment",
  },
  {
    userId: 3,
    songId: 123,
    body: "comment",
  },
  {
    userId: 4,
    songId: 124,
    body: "comment",
  },
  {
    userId: 5,
    songId: 125,
    body: "comment",
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
