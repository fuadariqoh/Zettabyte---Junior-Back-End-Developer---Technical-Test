const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username cant be empty"],
    },
    text: {
      type: String,
    },
    articleId: {
      type: ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

const comment = mongoose.model("Comment", commentSchema);

module.exports = comment;
