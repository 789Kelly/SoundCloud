const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const albumsRouter = require("./albums.js");
const songsRouter = require("./songs.js");
const commentsRouter = require("./comments.js");
const playlistsRouter = require("./playlists.js");

router.use(sessionRouter);

router.use(usersRouter);

router.use("/albums", albumsRouter);

router.use("/songs", songsRouter);

// router.use("/comments", commentsRouter);

// router.use("/playlists", playlistsRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
