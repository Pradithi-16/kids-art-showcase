// Fix MongoDB Atlas DNS lookup issues
const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "8.8.4.4"
]);


// Load environment variables
require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");


// Routes
const authRoutes = require("./routes/auth");
const artworkRoutes = require("./routes/artwork");
const competitionRoutes = require("./routes/competition");
const forumRoutes = require("./routes/forum");


// Create Express app
const app = express();


// ======================
// Middleware
// ======================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));


// ======================
// Static Files
// ======================

app.use(
    "/uploads",
    express.static(
        path.join(__dirname, "public/uploads")
    )
);

app.use(
    express.static(
        path.join(__dirname, "public")
    )
);


// ======================
// MongoDB Connection
// ======================

mongoose
    .connect(
        process.env.MONGO_URI,
        {
            serverSelectionTimeoutMS: 5000
        }
    )
    .then(() => {

        console.log("✅ MongoDB Connected");

    })
    .catch((error) => {

        console.error(
            "❌ MongoDB Connection Error:",
            error.message
        );

        process.exit(1);

    });


// ======================
// API Routes
// ======================

app.use(
    "/api/auth",
    authRoutes
);


app.use(
    "/api/artwork",
    artworkRoutes
);


app.use(
    "/api/competition",
    competitionRoutes
);


app.use(
    "/api/forum",
    forumRoutes
);


// ======================
// Home Route
// ======================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            "views",
            "landing.html"
        )
    );

});


// Health Check (for deployment)

app.get("/health", (req, res) => {

    res.json({

        success: true,

        message: "Server is running"

    });

});


// ======================
// 404 Handler
// ======================

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "Route not found"

    });

});


// ======================
// Global Error Handler
// ======================

app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).json({

        success: false,

        message: "Internal Server Error"

    });

});


// ======================
// Start Server
// ======================

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(
        `🚀 Server running on port ${PORT}`
    );

});