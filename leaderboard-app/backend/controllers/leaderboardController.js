import User from "../models/User.js";

export const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ score: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching leaderboard" });
  }
};

export const addOrUpdateUser = async (req, res) => {
  const { name, score } = req.body;

  try {
    let user = await User.findOne({ name });

    if (user) {
      user.score = Math.max(user.score, score); // Keep higher score
      await user.save();
      res.json({ message: "User score updated", user });
    } else {
      user = new User({ name, score });
      await user.save();
      res.json({ message: "User added", user });
    }
  } catch (err) {
    res.status(500).json({ message: "Error adding/updating user" });
  }
};