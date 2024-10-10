import React, { useState } from 'react';
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Main from './components/ui/Main'
//import ChallengeList from './components/ChallengeList' # Tidak butuh karena sudah diwakilkan oleh Challenges
import Challenges from './components/Challenges'
import Leaderboard from './components/Leaderboard'
import Community from './components/Community'
import Resources from './components/Resources'

function App() {
  const [users, setUsers] = useState([
    { name: 'You', points: 0 },
    { name: 'Jovan', points: 120 },
    { name: 'Putra', points: 100 },
    { name: 'Abby', points: 80 },
  ]);

  const handleCompleteChallenge = (earnedPoints) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.name === 'You' ? { ...user, points: user.points + earnedPoints } : user
      )
    );
  };

  return (
    <div className="App">
      <Header></Header>
      <Main />
      <Challenges onCompleteChallenge={handleCompleteChallenge} />
      <Leaderboard users={users} />
      <Community></Community>
      <Footer />
    </div>
      
  )
}

export default App;