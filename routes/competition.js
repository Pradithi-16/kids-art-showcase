const express = require("express");
const Competition =
  require("../models/Competition");

const router = express.Router();

router.get("/", async (req, res) => {

  const competitions =
    await Competition.find();

  res.json(competitions);
});

router.post("/", async (req, res) => {

  const competition =
    await Competition.create(req.body);

  res.json(competition);
});

module.exports = router;