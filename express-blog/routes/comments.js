const express = require("express");
const {
  create,
  destroy,
  update,
  index,
  show,
} = require("../controllers/commentController");
const router = express.Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
