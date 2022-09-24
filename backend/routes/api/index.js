const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const albumsRouter = require("./albums.js");
const songsRouter = require("./songs.js");
const commentsRouter = require("./comments.js");
const playlistsRouter = require("./playlists.js");
const artistsRouter = require("./artists.js");

router.use(sessionRouter);

router.use(usersRouter);

router.use("/api/albums", albumsRouter);

router.use("/api/songs", songsRouter);

router.use("/api/comments", commentsRouter);

router.use("/api/playlists", playlistsRouter);

router.use("/api/artists", artistsRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
