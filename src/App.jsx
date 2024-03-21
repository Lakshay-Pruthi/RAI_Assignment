import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Live from './Pages/Live'
import Replay from './Pages/Replay'

function App() {

  const [comments, setComments] = useState([]);



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Live comments={comments} setComments={setComments} />} />
          <Route path="/replay" element={<Replay comments={comments} />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
