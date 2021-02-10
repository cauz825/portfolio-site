import React from 'react'
import Navi from './Components/Navi'
import HomeCarousel from './Components/HomeCarousel'
import About from './Components/About'
import Resume from './Components/Resume'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navi />
          <Route path="/home" component={HomeCarousel} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
