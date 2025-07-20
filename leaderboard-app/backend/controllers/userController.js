const User = require('../models/User');
const History = require('../models/History');

// 📥 Get all users (for dropdown + leaderboard)
const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// ➕ Add new user
const addUser = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  try {
    const existing = await User.findOne({ name });
    if (existing) return res.status(400).json({ error: 'User already exists' });

    const newUser = new User({ name, totalPoints: 0 });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Error creating user' });
  }
};

// 🏆 Claim points for user
const claimPoints = async (req, res) => {
  const { userId } = req.params;
  const points = Math.floor(Math.random() * 10) + 1;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.totalPoints += points;
    await user.save();

    const history = new History({
      userId: user._id,
      userName: user.name,
      points,
      claimedAt: new Date(),
    });

    await history.save();

    res.json({ message: 'Points claimed', user, points });
  } catch (err) {
    res.status(500).json({ error: 'Error claiming points' });
  }
};

// 📜 Get history logs
const getHistory = async (req, res) => {
  try {
    const logs = await History.find().sort({ claimedAt: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch history' });
  }
};

module.exports = {
  getUsers,
  addUser,
  claimPoints,
  getHistory,
};
