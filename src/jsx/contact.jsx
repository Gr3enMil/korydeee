import React from "react";

const Contact = () => {
    const linkedClick = () => { // odkaz na LinkedIn
        window.open('https://www.linkedin.com/in/danielkorous/', '_blank')
      }
    return (
        <main className="contact" id="contact">
              <form>
                <h2>Contact us...</h2>
                <input type="text" placeholder="Name" id="name" name="name" required /> 
                <input type="email" placeholder="your@email.com"id="email" name="email" required />
                <textarea id="message" placeholder="Tell me..." name="message" required />
                <button type="submit" className='formButt'>Send</button>
              </form>
              <div>
                <h2>...or catch me on</h2>
                <button className='aboutButton' onClick={linkedClick}>Linked <span className='in'>in</span></button>
              </div>
            </main>
    )
}

export default Contact;