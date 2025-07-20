# 🏆 Leaderboard App

A full-stack leaderboard application built with **React (Vite)** for the frontend, **Node.js + Express** for the backend, and **MongoDB** for persistent storage. Users can be added, claim random points, and view a live-updating leaderboard.

---

## 🚀 Features

- 🔁 Claim random points (1–10) for selected users
- 📊 Real-time updating leaderboard
- ➕ Add new users dynamically
- 🧠 Smart backend with MongoDB claim history tracking
- 🎨 Clean and user-friendly interface

---

## 🧩 Tech Stack

| Frontend     | Backend        | Database  |
|--------------|----------------|-----------|
| React + Vite | Node.js + Express | MongoDB    |

---

## 📂 Project Structure

leaderboard-app/
├── client/ # Frontend (React + Vite)
│ ├── src/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ └── ScoreBoard.jsx
│ │ ├── components/
│ │ │ └── Leaderboard.jsx
│ └── index.html
├── server/ # Backend (Express API)
│ ├── index.js
│ ├── models/
│ │ ├── User.js
│ │ └── ClaimHistory.js
│ └── routes/
│ └── userRoutes.js


---

## ⚙️ How to Run the App

### 1. Clone the repository

git clone <your-repo-link>
cd leaderboard-app

2. Start the Backend

cd server
npm install
node index.js

🟢 Should print: API is running on port 5000
MongoDB must be running and connected.

3. Start the Frontend

cd client
npm install
npm run dev

🟣 Access the app at: http://localhost:5173

🔌 API Endpoints
Method	Endpoint	Description
GET	/api/users	Get all users
POST	/api/users	Add new user
POST	/api/claim/:userId	Claim random points for user
GET	/api/leaderboard	Get leaderboard sorted by score

✅ Tasks Implemented

Users stored in MongoDB

Claiming points updates both user and history

Points are random between 1–10

Live leaderboard with sorting

Real-time updates after claiming

    Frontend connected to backend API

🧠 Optional Enhancements (Future Ideas)

    Add claim history table with timestamps

    Add login/auth system for users

    Display total claims per user

    Add animations / better styling

🧑‍💻 Author

Veda Sri – Final Year CSE, IIT Bhilai
