// models/Bicycle.js
const mongoose = require("mongoose");

const bicycleSchema = new mongoose.Schema({
  bicycleName: { type: String, required: true },
  bicycleModel: { type: String, required: true },
  serialNumber: { type: String, required: true },
  bikeImage: { type: String},
  location: { type: String, required: true },
  ownershipProof: { type: String,},
});

const Bicycle = mongoose.model("Bicycle", bicycleSchema);
module.exports = Bicycle;
