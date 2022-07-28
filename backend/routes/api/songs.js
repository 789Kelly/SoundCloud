const express = require("express");

const router = express.Router();

const { Song } = require("../../db/models");

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
