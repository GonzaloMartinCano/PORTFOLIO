import React from 'react'
import { Switch, Route} from 'react-router-dom'
import './App.css';
import BgEffect from './components/effect/BgEffect'
import Navbar from './components/navbar/Navbar'
import Index from './components/index/Index'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Notfound from './components/notfound/Notfound'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
      
      <Navbar />


      <Switch>
        <Route path="/" exact render={() => <Index/>} />
        <Route path="/resume" exact render={() => <Skills />} />
        <Route path="/projects" exact render={() => <Projects />} />
        <Route path="/contact" exact render={() => <Contact />} />
        <Route path="/" render={() => <Notfound/>} />

      </Switch>

     
      <BgEffect>
         
      </BgEffect>
    </>
  );
}

export default App;
