const Article = require("../models/articleModel");
const Comment = require("../models/commentModel");

module.exports = {
  index: async (request, response) => {
    try {
      const comment = await Comment.find();
      return response.status(200).json({
        status: "success",
        data: comment,
      });
    } catch (error) {
      return response.status(400).json({
        status: "error",
      });
    }
  },

  show: async (request, response) => {
    try {
      const { id } = request.params;
      const comment = await Comment.findById(id);
      return response.status(200).json({
        status: "success",
        data: comment,
      });
    } catch (error) {
      return response.status(400).json({
        status: "error",
      });
    }
  },
  create: async (request, response) => {
    try {
      const comment = new Comment();
      comment.username = request.body.username;
      comment.text = request.body.text;
      comment.articleId = request.body.articleId;
      comment.save().then(() => {
        Article.findOne({ _id: comment.articleId }, async (error, article) => {
          if (article) {
            console.log(article, comment, article.comments);
            article.comments.push(comment);
            article.save();
            const test = await Comment.create(comment);
            console.log(test);
            return response.status(200).json({
              status: "success",
              message: "comment is added",
            });
          }
          return response.status(400).json({
            status: "failed",
            message: "Article is not found",
          });
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (request, response) => {
    try {
      const { id } = request.params;
      const comment = await Comment.findByIdAndUpdate(id, request.body, {
        returnDocument: "after",
      });
      return response.status(200).json({
        status: "success",
        data: comment,
      });
    } catch (error) {
      return response.status(400).json({
        status: "failed",
      });
    }
  },
  destroy: async (request, response) => {
    try {
      const { id } = request.params;
      await Article.updateMany({}, { $pull: { comments: id } }).exec();
      await Comment.deleteOne({ _id: id });
      return response.status(200).json({
        status: "success",
        message: "Comment is deleted",
      });
    } catch (error) {
      return response.status(400).json({
        message: "error",
      });
    }
  },
};
