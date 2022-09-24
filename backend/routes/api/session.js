const express = require("express");

const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");
const { User } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const validateLogin = [
  check("credential")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Email is required"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Password is required"),
  handleValidationErrors,
];

const router = express.Router();

router.post("/api/session", validateLogin, async (req, res, next) => {
  const { credential, password } = req.body;

  const user = await User.login({ credential, password });

  if (!user) {
    const err = new Error();
    err.message = "Invalid credentials";
    err.status = 401;
    return next(err);
  }

  const token = await setTokenCookie(res, user);

  return res.json({
    ...user.toSafeObject(),
    token,
  });
});
//user: ...user.toSafeObject(),

router.delete("/api/session", (_req, res) => {
  res.clearCookie("token");
  return res.json({ message: "success" });
});

router.get("/api/session", restoreUser, (req, res) => {
  const { user } = req;
  if (user) {
    return res.json({
      ...user.toSafeObject(),
    });
  } else return res.json({});
});
//removed requireAuth middleware

router.get("/api/users/current", restoreUser, requireAuth, (req, res) => {
  const { user } = req;
  if (user) {
    return res.json({
      ...user.toSafeObject(),
    });
  } else return res.json({});
});

module.exports = router;
