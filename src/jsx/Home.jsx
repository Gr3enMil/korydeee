import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import "../scss/App.scss";

const Home = () => {
  const [size, setSize] = useState(0);
  const [container, setContainer] = useState("container");
  const [nav, setNav] = useState("nav");
  const [menu, setMenu] = useState("menu");

  const visible = () => {
    if (window.innerWidth < 1080) {
      setContainer("container");
      setMenu("menu");
      setNav("nav");
    }

    setSize((x) => x + 1);
  };

  const allHidden = () => {
    setContainer(container === "container" ? "container hidden" : "container");

    if (menu === "menu") {
      setTimeout(() => {
        setMenu("menu cross");
      }, 10);
    } else {
      setMenu("menu");
    }

    if (nav === "nav") {
      setNav("nav mobileMenu1");
      setTimeout(() => {
        setNav("nav mobileMenu1 mobileMenu2");
      }, 10);
    } else {
      setNav("nav");
    }
  };

  return (
    <>
      <Helmet>
        <title>Korous Design</title>
        <meta name="description" content="Project portfolio." />
      </Helmet>
      <header className="header" id="header">
        <div className="headerContainer">
          <div className="filler"></div>
          <div className="headerLogo">
            <div className="kory">
              <a href="/" className="link">
                KOROUS.DESIGN
              </a>
            </div>
          </div>
          <div className="headerMenu">
            <button type="button" className={menu} onClick={allHidden} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav className={nav}>
              <ul>
                <li>
                  <Link to="/" onClick={visible}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={visible}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={visible}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className={container}>
        <Outlet context={[size, setSize]} />
      </div>
    </>
  );
};

export default Home;
