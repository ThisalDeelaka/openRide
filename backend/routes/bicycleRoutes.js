// routes/bicycleRoutes.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const { addBicycle,getAllBikes } = require("../controllers/bicycleController");

const router = express.Router();

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to file name
  },
});

const upload = multer({ storage: storage });

// Route to add a bicycle
router.post(
  "/add",
  upload.fields([{ name: "bikeImage" }, { name: "ownershipProof" }]),
  addBicycle
);

router.get('/all', getAllBikes);

module.exports = router;
