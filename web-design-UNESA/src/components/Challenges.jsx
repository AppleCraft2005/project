import React from 'react';
import ChallengeList from './ChallengeList';

function Challenges({ onCompleteChallenge }) {
  const handleCompleteChallenge = (challenge) => {
    onCompleteChallenge(challenge.points);
  };

  return (
    <div >
      <ChallengeList onChallengeComplete={handleCompleteChallenge} />
    </div>
  );
}

export default Challenges;