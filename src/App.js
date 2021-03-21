import React from 'react'
import Navi from './Components/Navi'
import HomeCarousel from './Components/HomeCarousel'
import About from './Components/About'
import Resume from './Components/Resume'
import Demo1 from './Components/Demo1'
import Demo2 from './Components/Demo2'
import Contact from './Components/Contact'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navi />
          <Route exact path="/" component={HomeCarousel} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path='/demo1' component={Demo1} />
          <Route path='/demo2' component={Demo2} />
          <Route path='/contact' component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;

//To-Do List
// -Fix Carousel
// -Display Resume
// -Generate About Page
