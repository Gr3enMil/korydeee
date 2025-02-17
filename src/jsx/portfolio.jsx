import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  const [page, setPage] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetch("../project.json")
        .then(res => res.json())

      setPage(data);
    })();
  }, []);

  const portfolioItems = page.map(item => {
    const { id, theme, role, title, titleimage } = item;
    return (
      <section className="pictureSection" key={id}>
        <Link to={`/portfolios/${id}`} className={theme}>
          <h1>{title}</h1>
          <img src={titleimage} alt={title} />
          <h2>{role}</h2>
        </Link>
      </section>
    )
  })

  return (
    <>
      <Helmet>
        <title>Portfolio | Korous Design</title>
        <meta name="description" content="Choose whatever fits you the most." />
      </Helmet>
      <main className="portfolio" id="portfolio">
        {portfolioItems}
      </main>
    </>
  )
}


export default Portfolio;