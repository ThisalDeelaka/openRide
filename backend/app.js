const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Importing CORS for handling cross-origin requests
const userRoutes = require("./routes/userRoutes");
const bicycleRoutes = require("./routes/bicycleRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies
app.use("/uploads", express.static("uploads")); // Serve static files from the uploads folder

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/bicycles", bicycleRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
