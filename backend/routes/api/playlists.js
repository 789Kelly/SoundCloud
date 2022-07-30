const express = require("express");

const router = express.Router();

const { Album, Playlist, Song } = require("../../db/models");

const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const validatePlaylist = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Playlist name is required"),
  handleValidationErrors,
];

router.get("/:playlistId", async (req, res) => {
  let { playlistId } = req.params;
  playlistId = parseInt(playlistId);

  const playlist = await Playlist.findByPk(playlistId);

  if (!playlist) {
    res.status(404);
    return res.json({
      message: "Playlist couldn't be found",
      statusCode: 404,
    });
  }

  const playlists = await Playlist.findByPk(playlistId, {
    attributes: [
      "id",
      "userId",
      "name",
      "createdAt",
      "updatedAt",
      ["imageUrl", "previewImage"],
    ],
    include: [
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
        through: { attributes: [] },
      },
    ],
  });

  return res.json(playlists);
});

router.put("/:playlistId", requireAuth, validatePlaylist, async (req, res) => {
  const { user } = req;
  let { name, imageUrl } = req.body;
  let { playlistId } = req.params;

  const playlist = await Album.findByPk(playlistId);

  if (!playlist) {
    res.status(404);
    return res.json({
      message: "Playlist couldn't be found",
      statusCode: 404,
    });
  }

  if (user.id === playlist.userId) {
    playlist.update({
      name,
      imageUrl,
    });

    let id = playlist.id;
    let userId = playlist.userId;
    let createdAt = playlist.createdAt;
    let updatedAt = playlist.updatedAt;
    let previewImage = playlist.imageUrl;

    return res.json({
      id,
      userId,
      name,
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

router.post("/", requireAuth, validatePlaylist, async (req, res) => {
  const { user } = req;
  let { name, imageUrl } = req.body;

  const newPlaylist = await Playlist.create({
    userId: user.id,
    name,
    imageUrl,
  });

  let id = newPlaylist.id;
  let userId = newPlaylist.userId;
  let previewImage = newPlaylist.imageUrl;
  let createdAt = newPlaylist.createdAt;
  let updatedAt = newPlaylist.updatedAt;

  res.status(201);
  return res.json({
    id,
    userId,
    name,
    createdAt,
    updatedAt,
    previewImage,
  });
});

module.exports = router;
