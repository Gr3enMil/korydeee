import { useState } from 'react';
import '../scss/App.scss'
import {
  Link,
  Outlet,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => { //main page 
  const [size, setSize] = useState(0)
  const [container, setContainer] = useState("container")
  const [nav, setNav] = useState("nav")
  const [menu, setMenu] = useState("menu")
  const [footer, setFooter] = useState("headerContainer")

 

  const visible = () => { // show main po kliknuti v menu
    if (window.innerWidth < 1080) {
      container === "container" ? setContainer("hidden") : setContainer("container")
      setMenu("menu")
      setNav("nav")
      setFooter("footerContainer headerContainer")
    }
    setSize(x => x + 1)
  }

  const allHidden = () => { // menu
    container === "container" ? setContainer("container hidden") : setContainer("container")
    menu === "menu" ?
      setTimeout(() => {
        setMenu("menu cross")
      }, 10) : setMenu("menu")
    nav === "nav" ?
      (setNav("nav mobileMenu1"),
        setTimeout(() => { //transition efekt po nacteni display:block
          setNav("nav mobileMenu1 mobileMenu2")
        }, 10)) : setNav("nav")
    footer === "footerContainer headerContainer" ? setFooter("closed") : null
    footer === "closed" ? setFooter("footerContainer headerContainer") : null
  }

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
            <div className='kory'><a href="/" className='link'>KOROUS.DESIGN</a></div>
          </div>
          <div className="headerMenu">
            <div className={menu} onClick={allHidden}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav className={nav}>
              <ul>
                <li><Link to="/" onClick={visible}>Portfolio</Link></li>
                <li><Link to="/about" onClick={visible}>About</Link></li>
                <li><Link to="/contact" onClick={visible}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className={container}>
        <Outlet context={[size, setSize]} />
      </div>
    </>
  )
}

export default Home;