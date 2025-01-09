import { useState, useEffect} from 'react';
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
      const {id, theme, tag, title, titleimage} = item;
        return (
                <section className="pictureSection" key={id}>
                      <Link to={`/portfolios/${id}`} className={theme}>
                          <h2>{title}</h2>
                          <img src={titleimage} />
                          <p>{tag}</p>
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