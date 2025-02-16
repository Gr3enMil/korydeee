import {useState, useEffect} from 'react';
import {Link, useParams, useOutletContext} from "react-router-dom";

const Portfolios = () => {
    const [size, setSize] = useOutletContext()
    const [page, setPage] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        (async () => {
          const data = await fetch("../project.json")
              .then(res=> res.json())
          setSize(x=>x+1) //state change given to parent
          setPage(data);
          setLoad(false);

      })();
    }, [setSize]);

    

 
    // id to identify object from json
    let { id } = useParams();
    // variable for next url
    let next = ((Number(id) + 1) > page.length)? 1 : Number(id) + 1;
    //variable for previous url
    let prev = (Number(id) - 1) === 0? page.length : Number(id) - 1;
    
    //function for previous page
    /*let prevPage = () => {
        setSize(x=>x+1) 
    } */
  
    const product = page.find(product => String(product.id) === id);
    const slowScroll = () => {
    
    };

    
    if (load){ // condition to render page after useEffect load
        return <div>Loading...</div>
    }
    return (
        <div className='portContainer' key={id}>
            <div className='portMain' >
                {/*<button onClick={prevPage} className="back"><Link to="../"><span></span> Back to portfolio</Link></button> */}
                    <div className='col col1'>
                        <h1>{product.title}</h1>
                        <p>{product.titleparagraph}</p>
                        <p>{product.titleparagraph2} </p>
                        <p>Role: {product.role}</p> 
                    </div>
                    <div className='col col2'>
                        <img src={product.titleimage} />
                    </div>
                
                    <div className='col col3'>
                        <h2>Problem</h2>
                        <p>{product.problem}</p>
                        <h2>Solution</h2>
                        <p>{product.solution}</p>
                        {product.dot1 && <ul>
                            <li>{product.dot1}</li>
                            <li>{product.dot2}</li>
                            <li>{product.dot3}</li>
                        </ul>}
                    </div>
                    <div className='col col4'>
                        {product.secondimage && <img src={product.secondimage} />}
                        {product.secondimage2 && <img src={product.secondimage2} /> }                    </div>
                    {product.thirdimage && <div className='col col5'>
                        <img src={product.thirdimage} />
                        {product.thirdimage2 && <img src={product.thirdimage2} /> }
                    </div>}
                    {(product.a1h1 || product.a1h2) && <div className='col col6'>
                        {product.a1h1 && <h2>{product.a1h1}</h2>}
                        {product.a1p1 && <p>{product.a1p1}</p>}
                        {product.a1h2 && <h2>{product.a1h2}</h2>}
                        {product.a1p2 && <p>{product.a1p2}</p>}
                        {product.a1p3 && <p>{product.a1p3}</p>}
                    </div>}
                  
                    {(product.a2h1 || product.a2h2) && <div className='col col7'>
                        {product.a2h1 && <h2>{product.a2h1}</h2>}
                        {product.a2p1 && <p>{product.a2p1}</p>}
                        {product.a2h2 && <h2>{product.a2h2}</h2>}
                        {product.a2p2 && <p>{product.a2p2}</p>}
                        {product.a2p3 && <p>{product.a2p3}</p>}
                    </div>}
                    {product.fourthimage && <div className='col col8'>
                        {product.fourthimage && <img src={product.fourthimage} /> }
                        {product.fourthimage2 && <img src={product.fourthimage2} /> }
                    </div>}               
            
                    {product.fifthimage && <div className='col col9'>
                        <img src={product.fifthimage} />
                    </div>}
                    {(product.a3h1 || product.a3h2) && <div className='col col10'>
                        {product.a3h1 && <h2>{product.a3h1}</h2>}
                        {product.a3p1 && <p>{product.a3p1}</p>}
                        {product.a3h2 && <h2>{product.a3h2}</h2>}
                        {product.a3p2 && <p>{product.a3p2}</p>}  
                    </div>}
                
                <h2 className='projects'>More projects</h2>
                <div className='row'>
                    <div className='col previous' onClick={slowScroll}>
                        <Link to={`/portfolios/${prev}`} >
                            <img src={`../title${prev}.png`} />
                        </Link>
                    </div>
                    <div className='col next'onClick={slowScroll}>
                        <Link to={`/portfolios/${next}`} >
                            <img src={`../title${next}.png`} />
                        </Link>
                    </div>
                </div>                
            </div>
        </div>
        )
}

export default Portfolios; 

/* window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
}); */