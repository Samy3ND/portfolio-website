import React from 'react';
import NavBar from './components/NavBar'
//import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero2/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;