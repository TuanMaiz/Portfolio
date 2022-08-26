import React, {useEffect} from 'react'
import './App.css';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import About from './components/About.js'
import Project from './components/Project.js'
import Contact from './components/Contact.js'
// import Footer from './components/Footer.js'
function App() {

  return (
    <React.Fragment>
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </React.Fragment>

  );
}

export default App;
