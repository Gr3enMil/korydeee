import React from 'react';
import { useEffect, useState } from 'react';
import '../scss/App.scss'
import Home from "./Home"
import Portfolio from "./portfolio"
import About from "./about"
import Contact from "./contact"
import Portfolios from "./portfolios"
import {
  Routes,
  Route,
  useParams
} from "react-router-dom";

const App = () => {
  
  return(
    <Routes>
      <Route path="/" element={<Home/>} >
        <Route index element={<Portfolio/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/portfolios/:id" element={<Portfolios/>} />
      </Route>
    </Routes>
  )
}

export default App
