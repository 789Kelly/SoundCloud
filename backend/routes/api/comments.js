const express = require("express");

const router = express.Router();

const { Comment } = require("../../db/models");

const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const validateComment = [
  check("body")
    .exists({ checkFalsy: true })
    .withMessage("Comment body text is required"),
  handleValidationErrors,
];

router.put("/:commentId", requireAuth, validateComment, async (req, res) => {
  const { user } = req;
  let { body } = req.body;
  let { commentId } = req.params;

  const comment = await Comment.findByPk(commentId);

  if (!comment) {
    res.status(404);
    return res.json({
      message: "Comment couldn't be found",
      statusCode: 404,
    });
  }

  if (user.id === comment.userId) {
    comment.update({
      body,
    });

    let id = comment.id;
    let userId = comment.userId;
    let songId = comment.songId;
    let createdAt = comment.createdAt;
    let updatedAt = comment.updatedAt;

    return res.json({
      id,
      userId,
      songId,
      body,
      createdAt,
      updatedAt,
    });
  } else {
    res.status(403);
    return res.json({
      message: "Forbidden",
      statusCode: 403,
    });
  }
});

router.delete("/:commentId", requireAuth, async (req, res) => {
  const { user } = req;
  const { commentId } = req.params;

  const comment = await Comment.findByPk(commentId);

  if (!comment) {
    res.status(404);
    return res.json({
      message: "Comment couldn't be found",
      statusCode: 404,
    });
  }

  if (user.id === comment.userId) {
    await comment.destroy();

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

module.exports = router;
