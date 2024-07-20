import React from "react";
import '../src/index.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import WorkTwo from './components/WorkTwo'
import Contact from "./components/Contact";




function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Work/>
     <WorkTwo/>
     <Contact/>
    </div>
  );
}

export default App;
