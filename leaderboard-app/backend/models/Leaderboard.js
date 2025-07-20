const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  name: String,
  score: Number,
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
