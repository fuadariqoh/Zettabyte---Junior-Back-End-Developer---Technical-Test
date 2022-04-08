const Article = require("../models/articleModel");

module.exports = {
  index: async (request, response) => {
    try {
      const { offset, filter, sort } = request.query;

      if (filter && sort) {
        const article = await Article.find({ author: filter })
          .populate("comments")
          .limit(5)
          .skip(offset)
          .sort({ createdAt: sort });

        return response.status(200).json({
          status: "success",
          data: article,
        });
      }

      if (filter) {
        const article = await Article.find({ author: filter })
          .populate("comments")
          .limit(5)
          .skip(offset);

        return response.status(200).json({
          status: "success",
          data: article,
        });
      }
      if (sort) {
        const article = await Article.find()
          .populate("comments")
          .limit(5)
          .skip(offset)
          .sort({ createdAt: sort });

        return response.status(200).json({
          status: "success",
          data: article,
        });
      }

      const article = await Article.find()
        .populate("comments")
        .limit(5)
        .skip(offset);
      return response.status(200).json({
        status: "success",
        data: article,
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
      const article = await Article.findById(id);
      return response.status(200).json({
        status: "success",
        data: article,
      });
    } catch (error) {
      return response.status(400).json({
        status: "error",
      });
    }
  },
  create: async (request, response) => {
    try {
      const insertArticle = await Article.create(request.body);

      return response.status(200).json({
        status: "Success",
        data: insertArticle,
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: "error",
      });
    }
  },
  update: async (request, response) => {
    try {
      const { id } = request.params;
      const article = await Article.findByIdAndUpdate(id, request.body, {
        returnDocument: "after",
      });
      return response.status(200).json({
        status: "success",
        message: article,
      });
    } catch (error) {
      return response.status(400).json({
        message: "error",
      });
    }
  },
  destroy: async (request, response) => {
    try {
      const { id } = request.params;
      await Article.findByIdAndDelete(id);
      return response.status(200).json({
        status: "success",
        message: "Article is successfully deleted",
      });
    } catch (error) {
      return response.status(400).json({
        status: "error",
      });
    }
  },
};
