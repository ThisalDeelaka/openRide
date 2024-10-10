const Bicycle = require("../models/Bicycle");

// Add Bicycle
const addBicycle = async (req, res) => {
  const { bicycleName, bicycleModel, serialNumber, location } = req.body;
  const bikeImage = req.files["bikeImage"]
    ? req.files["bikeImage"][0].path
    : null;
  const ownershipProof = req.files["ownershipProof"]
    ? req.files["ownershipProof"][0].path
    : null;

  try {
    const newBicycle = new Bicycle({
      bicycleName,
      bicycleModel,
      serialNumber,
      bikeImage,
      location,
      ownershipProof,
    });
    await newBicycle.save();
    res
      .status(201)
      .json({ message: "Bicycle added successfully!", bicycle: newBicycle });
  } catch (error) {
    res.status(500).json({ message: "Error adding bicycle", error });
  }
};

const getAllBikes = async (req, res) => {
  try {
    const bicycles = await Bicycle.find();
    res.status(200).json(bicycles);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving bicycles", error });
  }
};

module.exports = { addBicycle, getAllBikes };
