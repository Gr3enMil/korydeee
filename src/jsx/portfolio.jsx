import { useState, useEffect} from 'react';
import React from 'react';
import {Link} from "react-router-dom";

const Portfolio = () => {
  const [page, setPage] = useState([]);
  useEffect(() => {
      (async () => {
          const data = await fetch("../project.json")
              .then(res=> res.json())
             
          setPage(data);
      })();
  }, []);

  const portfolioItems = page.map(item => {
      const {id, title, titleparagraph, client, role, year, titleimage} = item;
        return (
                <section className="pictureSection" key={id}>
                      <Link to={`/portfolios/${id}`}>
                          <img src={titleimage} />
                          <div className='title'>
                            <p>{title}</p>
                          </div>
                      </Link>
                </section>       
        )
      })
      
      return (
        <main className="portfolio" id="portfolio">
          {portfolioItems}
        </main>
      )
}


export default Portfolio;