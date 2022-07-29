const express = require("express");

const router = express.Router();

const { Album, Song } = require("../../db/models");

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

router.post("/:albumId/songs", requireAuth, validateSong, async (req, res) => {
  const { user } = req;
  let { albumId } = req.params;
  let { title, description, url, imageUrl } = req.body;

  albumId = parseInt(albumId);

  const album = await Album.findByPk(albumId);

  if (!album) {
    res.status(404);
    return res.json({
      message: "Album couldn't be found",
      statusCode: 404,
    });
  }

  if (user.id === album.userId) {
    const newSong = await Song.create({
      userId: user.id,
      albumId,
      title,
      description,
      url,
      imageUrl,
    });

    let id = newSong.id;
    let userId = newSong.userId;
    let previewImage = newSong.imageUrl;
    let createdAt = newSong.createdAt;
    let updatedAt = newSong.updatedAt;

    res.status(201);
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

router.get("/", async (req, res) => {
  let Albums = await Album.findAll({
    attributes: [
      "id",
      "userId",
      "title",
      "description",
      "createdAt",
      "updatedAt",
      ["imageUrl", "previewImage"],
    ],
  });
  return res.json({
    Albums,
  });
});

module.exports = router;
