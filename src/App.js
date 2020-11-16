import React from 'react'
import { Switch, Route} from 'react-router-dom'
import './App.css';
import BgEffect from './components/effect/BgEffect'
import Navbar from './components/navbar/Navbar'
import Index from './components/index/Index'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'


function App() {
  return (
    <>
      
      <Navbar />


      <Switch>
        <Route path="/PORTFOLIO/" exact render={() => <Index/>} /> 
        <Route path="/PORTFOLIO/resume" exact render={() => <Skills />} />
        <Route path="/PORTFOLIO/projects" exact render={() => <Projects />} />
        <Route path="/PORTFOLIO/contact" exact render={() => <Contact />} />

      </Switch>

     
      <BgEffect>
         
      </BgEffect>
    </>
  );
}

export default App;
