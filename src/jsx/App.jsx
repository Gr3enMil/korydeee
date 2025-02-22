import '../scss/App.scss'
import Home from "./Home"
import Portfolio from "./portfolio"
import About from "./about"
import Contact from "./contact"
import Portfolios from "./portfolios"
import {
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

const App = () => {

  return (
    <>
      <HelmetProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolios/:id" element={<Portfolios />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </>
  )
}

export default App
