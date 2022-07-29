const express = require("express");

const router = express.Router();

const { Song, User, Album } = require("../../db/models");

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
    include: [
      {
        model: User,
        attributes: ["id", "username", "previewImage"],
      },
      {
        model: Album,
        attributes: ["id", "title", ["imageUrl", "previewImage"]],
      },
    ],
  });

  return res.json({
    songs,
  });
});

router.get("/", async (req, res) => {
  let Songs = await Song.findAll({
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
  });
});

module.exports = router;
