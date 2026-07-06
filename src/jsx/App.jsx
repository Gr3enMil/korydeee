import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Portfolio from "./portfolio.jsx";
import Portfolios from "./portfolios.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolios/:id" element={<Portfolios />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
