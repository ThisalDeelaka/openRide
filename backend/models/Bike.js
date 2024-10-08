const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lat: { type: Number, required: true },  // GPS latitude
  lng: { type: Number, required: true },  // GPS longitude
  status: { type: String, enum: ['available', 'rented', 'maintenance'], default: 'available' },
  qrCode: { type: String, required: true },  // QR code string for unlocking
});

module.exports = mongoose.model('Bike', bikeSchema);
