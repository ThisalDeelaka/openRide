const Bike = require('../models/Bike');
const Rental = require('../models/Rental');

// Fetch nearest available bikes (for simplicity, no location filtering here)
exports.getBikes = async (req, res) => {
  try {
    const bikes = await Bike.find({ status: 'available' });
    res.status(200).json(bikes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bikes' });
  }
};

// Start a bike rental
exports.startRental = async (req, res) => {
  try {
    const { userId, qrCode } = req.body;
    const bike = await Bike.findOne({ qrCode, status: 'available' });
    if (!bike) {
      return res.status(400).json({ error: 'Bike not available' });
    }

    const rental = new Rental({ user: userId, bike: bike._id });
    await rental.save();
    bike.status = 'rented';
    await bike.save();

    res.status(200).json({ message: 'Rental started', rental });
  } catch (error) {
    res.status(500).json({ error: 'Failed to start rental' });
  }
};

// End a bike rental
exports.endRental = async (req, res) => {
  try {
    const { rentalId } = req.body;
    const rental = await Rental.findById(rentalId).populate('bike');
    if (!rental || rental.status !== 'in-progress') {
      return res.status(400).json({ error: 'Rental not found or already completed' });
    }

    rental.endTime = Date.now();
    rental.status = 'completed';
    await rental.save();

    rental.bike.status = 'available';
    await rental.bike.save();

    res.status(200).json({ message: 'Rental ended', rental });
  } catch (error) {
    res.status(500).json({ error: 'Failed to end rental' });
  }
};
