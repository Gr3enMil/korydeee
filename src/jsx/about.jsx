import React from 'react';

const About = () => {
    const linkedClick = () => { // odkaz na LinkedIn
        window.open('https://www.linkedin.com/in/danielkorous/', '_blank')
      }
    return (
        <main className="about" id="about">
        <div className='aboutText'>
          <h2>Hi!</h2>
          <p className='aboutTextP'>Pleasure to meet you, I am a designer with a history of working in the Information technology and services industry. I am very strong in Prototyping, Research, Analysis, Brainstorming Ideas, Teamwork and Creating effective design solutions to specific newfound problems. </p>
          <p className='aboutTextP'>I have been designing for over 7 years and already had a chance to work on many wonderful projects for a wide range of customers from Škoda Auto, LEGO and Nestlé to Blockchain startups and small businesses.</p>
          <p className='aboutTextP'>I usually focus on bringing the biggest value to the user, as I like to create things that are functional, intuitive, easy to use and playful. I believe in an individual approach to each product and its users.</p>
        </div> 
        <div className='aboutPic'>
          <img src='../dan.png' alt="koryDan" id="tabletPic" />
          <img src='../kory2.png' alt="korydee" id="mobilePic" />
        </div>
        <div className='aboutLogos'>
          <img src='../skoda.png' alt="Skoda" className='skoda'/>
          <img src='../lego.png' alt="Lego" />
          <img src='../vw.png' alt="VW" />
          <img src='../nestle.png' alt="Nestle" className='nestle'/>
          <img src='../aricoma.png' alt="Aricoma" />
          <img src='../windingtree.png' alt='Windingtree' className='windingtree'/>
        </div>
        <button className='aboutButton' onClick={linkedClick}>Linked <span className='in'>in</span></button>
      </main>
    )
}

export default About;