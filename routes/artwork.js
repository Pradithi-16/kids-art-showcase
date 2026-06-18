const express = require("express");
const Artwork = require("../models/Artwork");

const router = express.Router();

router.get("/", async (req, res) => {

  const artworks =
    await Artwork.find();

  res.json(artworks);
});

router.post("/upload", async (req, res) => {

  const artwork =
    await Artwork.create(req.body);

  res.json(artwork);
});

router.put("/like/:id", async (req, res) => {

  const art =
    await Artwork.findById(req.params.id);

  art.likes++;

  await art.save();

  res.json(art);
});

module.exports = router;