import './App.css'
import Herohome from './pages/Herohome'
import Navbar from './pages/Navbar'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Navbar />} />
        <Route path="/herohome" element={<Herohome />} />

      </Routes>
    </>
  )
}

export default App
