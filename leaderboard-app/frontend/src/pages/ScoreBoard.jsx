import { useState, useEffect } from 'react';

export default function ScoreBoard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/scores')
      .then((res) => res.json())
      .then((data) => setScores(data))
      .catch((err) => console.error('Error fetching scores:', err));
  }, []);

  return (
    <div>
      <h2>Score Board</h2>
      <ul>
        {scores.map((score) => (
          <li key={score._id}>
            {score.username}: {score.points}
          </li>
        ))}
      </ul>
    </div>
  );
}