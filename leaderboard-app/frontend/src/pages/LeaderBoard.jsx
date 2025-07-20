import { useEffect, useState } from 'react';
import axios from 'axios';

export default function LeaderBoard() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState('');
  const [message, setMessage] = useState('');
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/leaderboard');
    setUsers(res.data);
  };

  const handleClaim = async () => {
    if (!selected) return alert('Select a user');
    const res = await axios.post(`http://localhost:5000/api/claim/${selected}`);
    setMessage(`Claimed ${res.data.points} points for ${res.data.user.name}`);
    fetchUsers();
  };

  const addUser = async () => {
    if (!nameInput.trim()) return;
    await axios.post('http://localhost:5000/api/users', { name: nameInput });
    setNameInput('');
    fetchUsers();
  };

  return (
    <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center">Leaderboard App</h1>

      <div className="flex gap-4 items-center">
        <select
          onChange={(e) => setSelected(e.target.value)}
          className="p-2 rounded border"
        >
          <option>Select User</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>

        <button onClick={handleClaim} className="bg-blue-500 text-white px-4 py-2 rounded">
          Claim Points
        </button>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Enter new user name"
          className="p-2 border rounded"
        />
        <button onClick={addUser} className="bg-green-500 text-white px-4 py-2 rounded">
          Add User
        </button>
      </div>

      {message && <p className="text-green-700">{message}</p>}

      <h2 className="text-2xl font-semibold mt-6">Leaderboard</h2>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Rank</th>
            <th className="p-2">Name</th>
            <th className="p-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={u._id} className="border-t">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
