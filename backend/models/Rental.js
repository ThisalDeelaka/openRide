const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bike: { type: mongoose.Schema.Types.ObjectId, ref: 'Bike', required: true },
  startTime: { type: Date, required: true, default: Date.now },
  endTime: { type: Date },
  status: { type: String, enum: ['in-progress', 'completed'], default: 'in-progress' },
});

module.exports = mongoose.model('Rental', rentalSchema);
