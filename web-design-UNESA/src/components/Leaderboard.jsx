import React from 'react';

function Leaderboard({ users }) {
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {sortedUsers.map((user, index) => (
          <li key={index}>
            {user.name} - {user.points} points
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;