const express = require("express");

const router = express.Router();

let posts = [];

router.get("/", (req, res) => {
  res.json(posts);
});

router.post("/", (req, res) => {

  posts.push(req.body);

  res.json({
    message: "Post Added"
  });

});

module.exports = router;