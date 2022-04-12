const Comment = require("../models/comment.model");

const getComments = async (req, res) => {
  const postId = req.params.id;
  try {
    const comments = await Comment.find({ postId: postId, parentId: null });
    res.status(200).json(comments);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getNestedComments = async (req, res) => {
  const parentId = req.params.id;
  try {
    const nestedComments = await Comment.find({ parentId: parentId });
    res.status(200).json(nestedComments);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const postComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    if (req.body.comment.length === 0) {
      res.status(411).json({ message: error._message });
    } else {
      res.status(409).json({ message: error._message });
    }
  }
};

const deleteComment = async (req, res) => {
  const _id = req.params.id;
  const checkHaveNested = await Comment.exists({ parentId: _id });
  if (checkHaveNested) {
    changeContentToDeleted(_id);
  } else {
    deleteComment(_id);
  }

  async function changeContentToDeleted(_id) {
    const update = {
      $set: {
        comment: "삭제된 댓글입니다.",
        authorId: "5d6ede6a0ba62570afcedd3a",
      },
    };
    const options = { new: true };
    try {
      const result = await Comment.findOneAndUpdate({ _id }, update, options);
      res.status(204).json(result);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }

  async function deleteComment(_id) {
    try {
      await Comment.findOneAndDelete({ _id });
      res.status(204).send("post deleted!");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }
};

const likeComment = async (req, res) => {
  const _id = req.body.comment_id;
  const user_id = res.locals.user._id;
  const update = { $push: { thumbUp: user_id } };
  const options = { new: true };
  if (res.locals.user == null) {
    res.status(403).json({ message: error.message });
  } else {
    try {
      const result = await Comment.findOneAndUpdate({ _id }, update, options);
      res.status(201).json(result);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }
};

module.exports = {
  getComments,
  postComment,
  deleteComment,
  getNestedComments,
  likeComment,
};
