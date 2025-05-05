
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import NavBar from "./components/navBar";
import Exper from "./components/Experience";
import Resume from "./components/Resume";
import Projects from "./components/Project";
import Skill from "./components/skillsCertificate";

function App() {
return (
  <Router>
     <NavBar />
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/about" element={<AboutMe/>}/>
      <Route path="/cert" element={<Skill/>}/>
      <Route path="/expe" element={<Exper/>}/>
      <Route path="/proj" element={<Projects/>}/>
      <Route path="/resume" element={<Resume/>}/>
      
    </Routes>
  </Router>
);
}

export default App;
