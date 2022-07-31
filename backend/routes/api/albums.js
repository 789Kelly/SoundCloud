const express = require("express");

const router = express.Router();

const { Album, Song, User } = require("../../db/models");

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

const validateAlbum = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Album title is required"),
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

router.get("/:albumId", async (req, res) => {
  let { albumId } = req.params;
  albumId = parseInt(albumId);

  const album = await Album.findByPk(albumId);

  if (!album) {
    res.status(404);
    return res.json({
      message: "Album couldn't be found",
      statusCode: 404,
    });
  }

  const albums = await Album.findByPk(albumId, {
    attributes: [
      "id",
      "userId",
      "title",
      "description",
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
        model: Song,
        as: "Songs",
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
      },
    ],
  });

  return res.json(albums);
});

router.put("/:albumId", requireAuth, validateAlbum, async (req, res) => {
  const { user } = req;
  let { title, description, imageUrl } = req.body;
  let { albumId } = req.params;

  const album = await Album.findByPk(albumId);

  if (!album) {
    res.status(404);
    return res.json({
      message: "Album couldn't be found",
      statusCode: 404,
    });
  }

  if (user.id === album.userId) {
    album.update({
      title,
      description,
      imageUrl,
    });

    let id = album.id;
    let userId = album.userId;
    let createdAt = album.createdAt;
    let updatedAt = album.updatedAt;
    let previewImage = album.imageUrl;

    return res.json({
      id,
      userId,
      title,
      description,
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

router.delete("/:albumId", requireAuth, async (req, res) => {
  const { user } = req;
  const { albumId } = req.params;

  const album = await Album.findByPk(albumId);

  if (!album) {
    res.status(404);
    return res.json({
      message: "Album couldn't be found",
      statusCode: 404,
    });
  }

  if (user.id === album.userId) {
    await album.destroy();

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

router.post("/", requireAuth, validateAlbum, async (req, res) => {
  const { user } = req;
  let { title, description, imageUrl } = req.body;

  const newAlbum = await Album.create({
    userId: user.id,
    title,
    description,
    imageUrl,
  });

  let id = newAlbum.id;
  let userId = newAlbum.userId;
  let previewImage = newAlbum.imageUrl;
  let createdAt = newAlbum.createdAt;
  let updatedAt = newAlbum.updatedAt;

  res.status(201);
  return res.json({
    id,
    userId,
    title,
    description,
    createdAt,
    updatedAt,
    previewImage,
  });
});

module.exports = router;
