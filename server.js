const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const artworkRoutes = require("./routes/artwork");
const competitionRoutes = require("./routes/competition");
const forumRoutes = require("./routes/forum");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("public/uploads"));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(
  "mongodb+srv://artshowcase:mintu16@cluster0.byrthzz.mongodb.net/artshowcase?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/artwork", artworkRoutes);
app.use("/api/competition", competitionRoutes);
app.use("/api/forum", forumRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "landing.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});