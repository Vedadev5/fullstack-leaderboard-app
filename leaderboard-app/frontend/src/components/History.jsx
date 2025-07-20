import { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  const [username, setUsername] = useState('');
  const [history, setHistory] = useState([]);

  const fetchHistory = () => {
    axios.get(`http://localhost:5000/api/history/${username}`)
      .then(res => setHistory(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Score History</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter Username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={fetchHistory}
        >
          View
        </button>
      </div>
      {history.length > 0 && (
        <ul className="list-disc pl-5">
          {history.map((item, i) => (
            <li key={i}>
              {item.score} pts - {new Date(item.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
