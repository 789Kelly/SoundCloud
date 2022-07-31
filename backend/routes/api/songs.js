const express = require("express");

const router = express.Router();

const { Comment, Song, User, Album, sequelize } = require("../../db/models");
const { Op } = require("sequelize");

const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const validateSong = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Song title is required"),
  check("url").exists({ checkFalsy: true }).withMessage("Audio is required"),
  handleValidationErrors,
];

const validateComment = [
  check("body")
    .exists({ checkFalsy: true })
    .withMessage("Comment body text is required"),
  handleValidationErrors,
];

const validateQuery = [
  check("page")
    .optional({ nullable: true })
    .isInt({ min: 0 })
    .withMessage("Page must be greater than or equal to 0"),
  check("size")
    .optional({ nullable: true })
    .isInt({ min: 0 })
    .withMessage("Size must be greater than or equal to 0"),
  check("createdAt")
    .optional({ nullable: true })
    .isDate()
    .withMessage("CreatedAt is invalid"),
  handleValidationErrors,
];

router.get("/:songId/comments", async (req, res) => {
  let { songId } = req.params;
  songId = parseInt(songId);

  const song = await Song.findByPk(songId);

  if (!song) {
    res.status(404);
    return res.json({
      message: "Song couldn't be found",
      statusCode: 404,
    });
  }

  const Comments = await Comment.findAll({
    where: {
      songId: song.id,
    },
    attributes: ["id", "userId", "songId", "body", "createdAt", "updatedAt"],
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
  });

  return res.json({
    Comments,
  });
});

router.post(
  "/:songId/comments",
  requireAuth,
  validateComment,
  async (req, res) => {
    const { user } = req;
    let { songId } = req.params;
    let { body } = req.body;

    songId = parseInt(songId);

    const song = await Song.findByPk(songId);

    if (!song) {
      res.status(404);
      return res.json({
        message: "Song couldn't be found",
        statusCode: 404,
      });
    }

    const newComment = await Comment.create({
      userId: user.id,
      songId,
      body,
    });

    let id = newComment.id;
    let userId = newComment.userId;
    let createdAt = newSong.createdAt;
    let updatedAt = newSong.updatedAt;

    res.status(201);
    return res.json({
      id,
      userId,
      songId,
      body,
      createdAt,
      updatedAt,
    });
  }
);

router.get("/:songId", async (req, res) => {
  let { songId } = req.params;
  songId = parseInt(songId);

  const song = await Song.findByPk(songId);

  if (!song) {
    res.status(404);
    return res.json({
      message: "Song couldn't be found",
      statusCode: 404,
    });
  }

  const songs = await Song.findByPk(songId, {
    attributes: [
      "id",
      "userId",
      "albumId",
      "title",
      "description",
      "url",
      "createdAt",
      "updatedAt",
      ["imageUrl", "previewImage"],
    ],
    include: [
      {
        model: User,
        as: "Artist",
        attributes: ["id", "username", "previewImage"],
      },
      {
        model: Album,
        attributes: ["id", "title", ["imageUrl", "previewImage"]],
      },
    ],
  });

  return res.json(songs);
});

router.put("/:songId", requireAuth, validateSong, async (req, res) => {
  const { user } = req;
  let { title, description, url, imageUrl } = req.body;
  let { songId } = req.params;

  const song = await Song.findByPk(songId);

  if (!song) {
    res.status(404);
    return res.json({
      message: "Song couldn't be found",
      statusCode: 404,
    });
  }

  if (user.id === song.userId) {
    song.update({
      title,
      description,
      url,
      imageUrl,
    });

    let id = song.id;
    let userId = song.userId;
    let albumId = song.albumId;
    let createdAt = song.createdAt;
    let updatedAt = song.updatedAt;
    let previewImage = song.imageUrl;

    return res.json({
      id,
      userId,
      albumId,
      title,
      description,
      url,
      createdAt,
      updatedAt,
      previewImage,
    });
  } else {
    res.status(403);
    return res.json({
      message: "Forbidden",
      statusCode: 403,
    });
  }
});

router.delete("/:songId", requireAuth, async (req, res) => {
  const { user } = req;
  const { songId } = req.params;

  const song = await Song.findByPk(songId);

  if (!song) {
    res.status(404);
    return res.json({
      message: "Song couldn't be found",
      statusCode: 404,
    });
  }

  if (user.id === song.userId) {
    await song.destroy();

    res.status(200);
    return res.json({
      message: "Successfully deleted",
      statusCode: 200,
    });
  } else {
    res.status(403);
    return res.json({
      message: "Forbidden",
      statusCode: 403,
    });
  }
});

router.get("/", validateQuery, async (req, res) => {
  let { page, size, title, createdAt } = req.query;

  let where = {};
  let pagination = {};

  if (!page) {
    page = 0;
  }

  if (!size) {
    size = 20;
  }

  if (Number.isNaN(page) || page < 0 || page > 10) {
    page = 0;
  } else {
    page = page;
  }

  if (Number.isNaN(size) || size < 0 || size > 20) {
    size = 20;
  } else {
    size = size;
  }

  if (page > 0) {
    pagination.limit = size;
    pagination.offset = size * (page - 1);
  } else {
    pagination.limit = size;
  }

  if (title) {
    where.title = title;
  }

  if (createdAt) {
    const date = new Date(createdAt);
    const lastDate = date.setDate(date.getDate() + 1);
    where.createdAt = { [Op.between]: [createdAt, lastDate] };
  }

  let Songs = await Song.findAll({
    where,
    ...pagination,
    attributes: [
      "id",
      "userId",
      "albumId",
      "title",
      "description",
      "url",
      "createdAt",
      "updatedAt",
      ["imageUrl", "previewImage"],
    ],
  });
  return res.json({
    Songs,
    page,
    size,
  });
});

module.exports = router;
