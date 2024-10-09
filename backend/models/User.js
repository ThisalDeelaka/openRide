const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['user', 'bikeOwner', 'admin'], default: 'user' }, // Added role field
});

// Function to create an admin user if not already exists
userSchema.statics.createAdmin = async function() {
  const adminExists = await this.findOne({ username: 'admin' });
  if (!adminExists) {
    const admin = new this({
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin123', // Use a hashed password in production
      role: 'admin',
    });
    await admin.save();
  }
};

module.exports = mongoose.model('User', userSchema);
