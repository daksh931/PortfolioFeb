import './App.css'

import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import OurWork from './pages/OurWork';
import ProjectDetails from './pages/Projects';



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<OurWork/>}/>
      <Route path="/projects" element={<ProjectDetails/>}/>

      
    </Routes>
  );
}


export default App
