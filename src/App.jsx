import './App.css'

import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import OurWork from './pages/OurWork';



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<OurWork/>}/>
    </Routes>
  );
}


export default App
