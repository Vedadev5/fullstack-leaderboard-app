import { useState } from 'react';
import axios from 'axios';

const Scoreboard = () => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');
  const [message, setMessage] = useState('');

  const submitScore = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/scores', {
        username,
        score: Number(score)
      });
      setMessage(response.data.message || 'Score submitted!');
      setUsername('');
      setScore('');
    } catch (error) {
      console.error(error);
      setMessage('Error submitting score');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Submit Your Score</h2>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 border rounded mb-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="number"
        placeholder="Score"
        className="w-full p-2 border rounded mb-3"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={submitScore}
      >
        Submit
      </button>
      {message && <p className="mt-4 text-green-700">{message}</p>}
    </div>
  );
};

export default Scoreboard;