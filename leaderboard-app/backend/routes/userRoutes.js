const express = require('express');
const router = express.Router();
const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Add new user
router.post('/users', async (req, res) => {
  const { name } = req.body;
  const user = new User({ name });
  await user.save();
  res.json(user);
});

// Claim points
router.post('/claim/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  const points = Math.floor(Math.random() * 10) + 1;
  user.totalPoints += points;
  await user.save();

  const history = new ClaimHistory({ userId: user._id, pointsClaimed: points });
  await history.save();

  res.json({ user, points });
});

// Get leaderboard
router.get('/leaderboard', async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
});

// Get claim history
router.get('/history', async (req, res) => {
  const history = await ClaimHistory.find().populate('userId', 'name');
  res.json(history);
});

module.exports = router;

