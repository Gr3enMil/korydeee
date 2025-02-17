import { Helmet } from "react-helmet-async";

const About = () => {
  
  return (
    <>
      <Helmet>
        <title>About | Korous Design</title>
        <meta name="description" content="Presents head of these projects." />
      </Helmet>
      <main className="about" id="about">
        <div className='aboutText'>
          <h1>Let’s put purpose<br></br>to those pixels!</h1>
          <p>Born in the mid-90s, I grew up immersed in the tech evolution, watching it shape the world and myself. Over time, I transitioned from a curious user to a dedicated designer, focused on making technology more human-centered and serving it’s purpose.</p>
          <p>With over 7 years of experience, I specialize in crafting functional, intuitive and attractive design solutions. I’ve worked with brands like Volkswagen, Škoda Auto, LEGO and Nestlé as well as Blockchain startups and other small businesses, learning that every project requires a unique approach tailored to its time, business, technology and users.</p>
          <p>To me, design is about solving problems and delivering real value to every party. </p>
        </div>
        <div className='aboutLogos'>
          <h2>Past experience</h2>
          <img src='../skoda.png' alt="Skoda" className='skoda' />
          <img src='../lego.png' alt="Lego" />
          <img src='../vw.png' alt="VW" />
          <img src='../nestle.png' alt="Nestle" className='nestle' />
          <img src='../aricoma.png' alt="Aricoma" />
          <img src='../windingtree.png' alt='Windingtree' className='windingtree' />
        </div>
      </main>
    </>
  )
}

export default About;