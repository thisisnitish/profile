import React from 'react'
import './App.css';
import Introduction from './components/Introduction'
import TechStack from './components/TechStack'
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const App = () => {
  
  return (
    <div className="app">
      <Introduction/>
      <TechStack/>
      <Education/>
      <Experience/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App
