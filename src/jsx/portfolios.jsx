import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useOutletContext, useParams } from "react-router-dom";

const Portfolios = () => {
  const [, setSize] = useOutletContext();
  const [page, setPage] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/project.json");

        if (!response.ok) {
          throw new Error("Could not load portfolio data.");
        }

        const data = await response.json();
        setSize((x) => x + 1);
        setPage(data);
      } catch (loadError) {
        console.error(loadError);
        setError("Portfolio detail could not be loaded.");
      } finally {
        setLoad(false);
      }
    })();
  }, [setSize]);

  const { id } = useParams();
  const next = Number(id) + 1 > page.length ? 1 : Number(id) + 1;
  const prev = Number(id) - 1 === 0 ? page.length : Number(id) - 1;
  const product = page.find((item) => String(item.id) === id);

  if (load) {
    return <div>Loading...</div>;
  }

  if (error || !product) {
    return <div>{error || "Portfolio item was not found."}</div>;
  }

  return (
    <>
      <Helmet>
        <title>{product.title} | Korous Design</title>
        <meta name="description" content="Look at this beautiful style!" />
      </Helmet>
      <div className="portContainer" key={id}>
        <div className="portMain">
          <div className="col col1">
            <h1>{product.title}</h1>
            <p>{product.titleparagraph}</p>
            <p>{product.titleparagraph2}</p>
            <p>Role: {product.role}</p>
          </div>
          <div className="col col2">
            <img src={product.titleimage} alt={product.title} />
          </div>

          <div className="col col3">
            <h2>Problem</h2>
            <p>{product.problem}</p>
            <h2>Solution</h2>
            <p>{product.solution}</p>
            {product.dot1 && (
              <ul>
                <li>{product.dot1}</li>
                <li>{product.dot2}</li>
                <li>{product.dot3}</li>
              </ul>
            )}
          </div>
          <div className="col col4">
            {product.secondimage && (
              <img src={product.secondimage} alt={`${product.title} example 1`} />
            )}
            {product.secondimage2 && (
              <img src={product.secondimage2} alt={`${product.title} example 2`} />
            )}
          </div>
          {product.thirdimage && (
            <div className="col col5">
              <img src={product.thirdimage} alt={`${product.title} example 3`} />
              {product.thirdimage2 && (
                <img src={product.thirdimage2} alt={`${product.title} example 4`} />
              )}
            </div>
          )}
          {(product.a1h1 || product.a1h2) && (
            <div className="col col6">
              {product.a1h1 && <h2>{product.a1h1}</h2>}
              {product.a1p1 && <p>{product.a1p1}</p>}
              {product.a1h2 && <h2>{product.a1h2}</h2>}
              {product.a1p2 && <p>{product.a1p2}</p>}
              {product.a1p3 && <p>{product.a1p3}</p>}
            </div>
          )}

          {(product.a2h1 || product.a2h2) && (
            <div className="col col7">
              {product.a2h1 && <h2>{product.a2h1}</h2>}
              {product.a2p1 && <p>{product.a2p1}</p>}
              {product.a2h2 && <h2>{product.a2h2}</h2>}
              {product.a2p2 && <p>{product.a2p2}</p>}
              {product.a2p3 && <p>{product.a2p3}</p>}
            </div>
          )}
          {product.fourthimage && (
            <div className="col col8">
              <img src={product.fourthimage} alt={`${product.title} example 5`} />
              {product.fourthimage2 && (
                <img src={product.fourthimage2} alt={`${product.title} example 6`} />
              )}
            </div>
          )}

          {product.fifthimage && (
            <div className="col col9">
              <img src={product.fifthimage} alt={`${product.title} example 7`} />
            </div>
          )}
          {(product.a3h1 || product.a3h2) && (
            <div className="col col10">
              {product.a3h1 && <h2>{product.a3h1}</h2>}
              {product.a3p1 && <p>{product.a3p1}</p>}
              {product.a3h2 && <h2>{product.a3h2}</h2>}
              {product.a3p2 && <p>{product.a3p2}</p>}
            </div>
          )}

          <h2 className="projects">More projects</h2>
          <div className="row">
            <div className="col previous">
              <Link to={`/portfolios/${prev}`}>
                <img src={`/title${prev}.png`} alt="Previous project" />
              </Link>
            </div>
            <div className="col next">
              <Link to={`/portfolios/${next}`}>
                <img src={`/title${next}.png`} alt="Next project" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolios;
