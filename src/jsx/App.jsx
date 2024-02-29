import React from 'react';
import '../scss/App.scss'
import Home from "./Home"
import Portfolio from "./portfolio"
import About from "./about"
import Contact from "./contact"
import Portfolio1 from "./portfolio1"
import Portfolio2 from "./portfolio2"
import Portfolio3 from "./portfolio3"
import Portfolio4 from "./portfolio4"
import Portfolio5 from "./portfolio5"
import Portfolio6 from "./portfolio6"
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio1" element={<Portfolio1 />} />
        <Route path="/portfolio2" element={<Portfolio2 />} />
        <Route path="/portfolio3" element={<Portfolio3 />} />
        <Route path='/portfolio4' element={<Portfolio4 />} />
        <Route path='/portfolio5' element={<Portfolio5 />} />
        <Route path='/portfolio6' element={<Portfolio6 />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
