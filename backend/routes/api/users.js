const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Album, Playlist, Song, User, sequelize } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const validateSignup = [
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("First Name is required"),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Last Name is required"),
  check("email")
    .custom(async (value) => {
      const checkEmail = await User.findOne({ where: { email: value } });
      if (checkEmail) {
        return Promise.reject("User already exists");
      }
    })
    // .withMessage("User already exists")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Invalid email"),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

const router = express.Router();

router.post("/api/users", validateSignup, async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  const checkEmail = await User.findOne({ where: { email } });

  if (checkEmail) {
    let error = new Error("User already exists");
    error.status = 403;
    error.errors = ["User with that email already exists"];
    throw error;
  }

  const user = await User.signup({
    firstName,
    lastName,
    email,
    username,
    password,
  });

  const token = await setTokenCookie(res, user);

  return res.json({
    ...user.toSafeObject(),
    token,
  });
});

router.get("/api/users/current/songs", requireAuth, async (req, res) => {
  const { user } = req;

  const Songs = await Song.findAll({
    where: {
      userId: user.id,
    },
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

router.get("/api/users/current/albums", requireAuth, async (req, res) => {
  const { user } = req;

  const Albums = await Album.findAll({
    where: {
      userId: user.id,
    },
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

router.get("/api/users/current/playlists", requireAuth, async (req, res) => {
  const { user } = req;

  const Playlists = await Playlist.findAll({
    where: {
      userId: user.id,
    },
    attributes: [
      "id",
      "userId",
      "name",
      "createdAt",
      "updatedAt",
      ["imageUrl", "previewImage"],
    ],
  });

  return res.json({
    Playlists,
  });
});

module.exports = router;
