const express = require('express');
const router = express.Router();
const { getBikes, startRental, endRental } = require('../controllers/bikeController');

// Get available bikes
router.get('/', getBikes);

// Start a rental by scanning QR code
router.post('/rent/start', startRental);

// End the rental
router.post('/rent/end', endRental);

module.exports = router;
