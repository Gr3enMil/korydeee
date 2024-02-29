import { useState, useEffect, useTransition } from 'react';
import React from 'react';
import {Link} from "react-router-dom";

const Portfolio = () => {
    return (
        <main className="portfolio" id="portfolio">
              <section className="buttons">
              {/* something here */}
              </section>
              <section className="pictureSection">
                <div className='row'>
                  <div className='column'>
                    <Link to="/portfolio1">
                        <img src="src\assets\fashion1.png" />
                        <div className='title'>
                          <p>Design of Model Hiring App</p>
                        </div>
                    </Link>
                  </div>
                  <div className='column'>
                    <Link to="/portfolio2"> 
                        <img src="src\assets\blockchain1.png" />
                        <div className='title'>
                          <p>Redesign of Blockchain Travel Product</p>
                        </div>
                    </Link>
                  </div>
                </div>
                <div className='row'>
                  <div className='column'>
                    <Link to="/portfolio3">
                        <img src="src\assets\mallari1.png" />
                        <div className='title'>
                          <p>Mallarisun website design</p>
                        </div>
                    </Link>
                  </div>
                  <div className='column'>
                    <Link to="/portfolio4">
                        <img src="src\assets\fashion1.png" />
                        <div className='title'>
                          <p>Project</p>
                        </div>
                    </Link>
                  </div>
                </div>
                <div className='row'>
                  <div className='column'>
                    <Link to="/portfolio5">
                        <img src="src\assets\fashion1.png" />
                        <div className='title'>
                          <p>Project</p>
                        </div>
                    </Link>
                  </div>
                  <div className='column'>
                    <Link to="/portfolio6">
                        <img src="src\assets\fashion1.png" />
                        <div className='title'>
                          <p>Project</p>
                        </div>
                    </Link>
                  </div>
                </div>
              </section>
            </main>
    )
}

export default Portfolio;