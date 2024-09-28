import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PollList from './pages/components/PollList'
import CreatePoll from './pages/components/CreatePoll'
import PollDetail from './pages/components/PollDetail'
import Home from './pages/components/Home'
import VoteConfirm from './pages/components/VoteConfirm'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pollList' element={<PollList/>}/>
          <Route path='/createPoll' element={<CreatePoll/>}/>
          <Route path='/pollDetail/:id' element={<PollDetail/>}/>
          <Route path='/voteConfirm' element={<VoteConfirm/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
