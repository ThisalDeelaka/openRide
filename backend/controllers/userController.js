const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });

    // Create an admin user if it doesn't exist
    await User.createAdmin(); // Ensure admin is created before user registration

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'User registration failed' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Respond with the user role
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};
