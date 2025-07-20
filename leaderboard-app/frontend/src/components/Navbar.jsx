import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-700 text-white p-4 flex justify-between">
    <h1 className="font-bold text-xl">Leaderboard App</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/scoreboard" className="hover:underline">Scoreboard</Link>
      <Link to="/leaderboard" className="hover:underline">Leaderboard</Link>
      <Link to="/history" className="hover:underline">History</Link>
    </div>
  </nav>
);

export default Navbar;