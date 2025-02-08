const Contact = () => {
    const linkedClick = () => { // odkaz na LinkedIn
        window.open('https://www.linkedin.com/in/danielkorous/', '_blank')
    }
    const mailClick = () => { // odkaz na email
        window.open('mailto: haha, troubo', '_blank')
    }
    const clicked = (e) => {
        e.preventDefault()
        //function to send informations on my email 
       
    } 
      
    return (
        <main className="contact" id="contact">
              <form action="/send-email" method="POST" className="contactForm">
                <h2>Contact Form</h2>
                <input type="text" placeholder="Name" id="name" name="name" required /> 
                <input type="email" placeholder="Email"id="email" name="email" required />
                <input type="text" placeholder="Subject"id="email" name="email" required />
                <textarea id="message" placeholder="Message with additional information (optional field)" name="message" required />
                <label>
                  <input type="checkbox" id="gdpr" name="gdpr" required />
                  <span>I agree to the processing of personal data.</span>
                </label>
                <button type="submit" className='formButt' onClick={(e)=>clicked(e)}>SEND</button> 
              </form>
              <div className="contactInfo">
                <div className='aboutButton' onClick={linkedClick}>
                  <img src="./linked.png" alt="linkedin"></img>Find me on LinkedIn</div>
                <div className='aboutButton' onClick={mailClick}>
                  <img src="./email.png" alt="email"></img>daniel@korous.design</div>
              </div>
            </main>
    )
}

export default Contact;