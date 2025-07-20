import History from "../models/History.js";

export const getHistory = async (req, res) => {
  try {
    const history = await History.find().sort({ date: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ message: "Error fetching history" });
  }
};

export const addHistory = async (req, res) => {
  const { name, score } = req.body;

  try {
    const entry = new History({ name, score });
    await entry.save();
    res.json({ message: "History entry added", entry });
  } catch (err) {
    res.status(500).json({ message: "Error adding history entry" });
  }
};