import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [page, setPage] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/project.json");

        if (!response.ok) {
          throw new Error("Could not load portfolio data.");
        }

        const data = await response.json();
        setPage(data);
      } catch (loadError) {
        console.error(loadError);
        setError("Portfolio data could not be loaded.");
      }
    })();
  }, []);

  const portfolioItems = page.map((item) => {
    const { id, theme, role, title, titleimage } = item;

    return (
      <section className="pictureSection" key={id}>
        <Link to={`/portfolios/${id}`} className={theme}>
          <h1>{title}</h1>
          <img src={titleimage} alt={title} />
          <h2>{role}</h2>
        </Link>
      </section>
    );
  });

  return (
    <>
      <Helmet>
        <title>Portfolio | Korous Design</title>
        <meta name="description" content="Choose whatever fits you the most." />
      </Helmet>
      <main className="portfolio" id="portfolio">
        {error || portfolioItems}
      </main>
    </>
  );
};

export default Portfolio;
