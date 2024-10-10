import React from 'react';

function Leaderboard({ users }) {
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  return (
    <div className="xl:mx-40 lg:mx-20 md:mx-10 mx-5 mb-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Leaderboard</h2>
      <ol className="list-decimal list-inside space-y-4">
        {sortedUsers.map((user, index) => (
          <li key={index} className="flex justify-between p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
            {user.name} - {user.points} points
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;