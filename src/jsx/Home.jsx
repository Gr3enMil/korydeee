import { useState, useEffect } from 'react';
import React from 'react';
import Portfolio from "./portfolio"
import '../scss/App.scss'
import {
    Link,
    NavLink,
    Outlet,
  } from "react-router-dom";

const Home = () => { //main page 
      const [click, setClick] = useState(true)
      const [container, setContainer] = useState("container")
      const [nav, setNav] = useState("nav")
      const [menu, setMenu] = useState("menu")
      const [footer, setFooter] = useState("headerContainer")
      
      useEffect(() => { // effect na roll-up NEFUNGUJE!!!
          let arrow = document.querySelector(".rollup")
          if (document.body.scrollHeight < window.innerHeight) {
            arrow.classList.add("hidden")
          } else {
            arrow.classList.remove("hidden")
          }
          console.log(document.body.clientHeight)
          
          console.log(document.body.scrollHeight)
          console.log(window.innerHeight)
      },[nav, menu, footer, container, click])

      const visible = () => { // show main po kliknuti v menu
        if (window.innerWidth < 1080) {
        container === "container"? setContainer("hidden") : setContainer("container")
        setMenu("menu")
        setNav("nav")
        setFooter("footerContainer headerContainer")
      }
      }
      
      const allHidden = () => { // menu
        container === "container"? setContainer("container hidden") : setContainer("container")
        menu === "menu"? 
        setTimeout(() => {
          setMenu("menu cross")
        }, 10) : setMenu("menu")
        nav === "nav"? 
        (setNav("nav mobileMenu1"), 
        setTimeout(() => { //transition efekt po nacteni display:block
          setNav("nav mobileMenu1 mobileMenu2")
        }, 10)) : setNav("nav") 
        footer === "footerContainer headerContainer"? setFooter("closed") : null
        footer === "closed"? setFooter("footerContainer headerContainer") : null
      }
      const changed = () => {
        setClick(prev=>!prev)
      }


        return(
          <>  
          <header className="header" id="header">
            <div className="headerContainer">
              <div className="filler"></div>
              <div className="headerLogo">
                <img src= "src\assets\logo.png" className="kory" alt='KOROUS.DESIGN'></img>
              </div>
              <div className="headerMenu">
                      <div className={menu} onClick={allHidden}>
                              <span></span>
                              <span></span>
                              <span></span>
                      </div>
                  <nav className={nav}>
                    <ul>
                      <li><Link to="/portfolio" onClick={visible}>Portfolio</Link></li>
                      <li><Link to="/about" onClick={visible}>About Me</Link></li>
                      <li id="last"><Link to="/contact" onClick={visible}>Contact</Link></li>
                    </ul>
                  </nav>
              </div>
            </div>
          </header>
          <div className={container}> 
            <Outlet onCHange={changed}/>
          </div>
          <div className={footer}>
            <footer className='footer'>
              <div className='rollup'>
                <a href="#header"><img src='src\assets\arrow.png' alt='arrow' /></a>
              </div>
              <div className='footerRight'>
                <p>© 2024, Korous Design</p>
              </div>
            </footer>
          </div>
          </>
        )
}

export default Home;