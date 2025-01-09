const Contact = () => {
    const linkedClick = () => { // odkaz na LinkedIn
        window.open('https://www.linkedin.com/in/danielkorous/', '_blank')
      }
      /*const clicked = (e) => {
        e.preventDefault()
        //function to send informations on my email 
        //currently not active since there is no form
      } */
      const mailed = () => {
        return `mailto:daniel@korous.design`
      }
    return (
        <main className="contact" id="contact">
              <form>
                <h2>Say "Hi!"...</h2>
                <p>at <a href={`mailto:daniel@korous.design`}>daniel@korous.design</a></p>
               {/* <input type="text" placeholder="Name" id="name" name="name" required /> 
                <input type="email" placeholder="your@email.com"id="email" name="email" required />
                <textarea id="message" placeholder="Tell me..." name="message" required />
                <button type="submit" className='formButt' onClick={(e)=>clicked(e)}>Send</button> */}
              </form>
              <div>
                <h2>...or catch me on</h2>
                <button className='aboutButton' onClick={linkedClick}>Linked <span className='in'>in</span></button>
              </div>
            </main>
    )
}

export default Contact;