import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Main from './components/ui/Main'
import ChallengeList from './components/ChallengeList'
import Challenges from './components/Challenges'
import Leaderboard from './components/Leaderboard'
import Community from './components/Community'
import Resources from './components/Resources'

function App() {

  return (
    <div  >
      <Header></Header>
      <Main />
      {/* <ChallengeList></ChallengeList> */}
      <Challenges></Challenges>
      {/* <Leaderboard></Leaderboard> */}
      <Community></Community>
      {/* <Resources></Resources> */}
      <Footer />
    </div>
      
  )
}

export default App
