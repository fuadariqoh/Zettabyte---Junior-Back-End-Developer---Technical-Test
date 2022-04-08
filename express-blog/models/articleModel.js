const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is a must"],
    },
    author: {
      type: String,
      required: [true, "Author is cant be empty"],
    },
    content: {
      type: String,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const article = mongoose.model("Article", articleSchema);

module.exports = article;
