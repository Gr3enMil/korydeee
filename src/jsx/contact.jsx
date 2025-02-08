const Contact = () => {
  const linkedClick = () => { // odkaz na LinkedIn
      window.open('https://www.linkedin.com/in/danielkorous/', '_blank')
  }

  const mailClick = () => { // odkaz na email
      window.open('mailto: haha, troubo', '_blank')
  }

  const clicked = async (e) => {
      e.preventDefault();

      // Získání hodnot z formuláře
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
      const gdpr = document.getElementById("gdpr").checked;

      if (!gdpr) {
          alert("Musíš souhlasit se zpracováním osobních údajů.");
          return;
      }

      const formData = { name, email, subject, message };

      try {
          const response = await fetch("/.netlify/functions/send-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
          });

          const result = await response.json();

          if (response.ok) {
              alert("Email byl úspěšně odeslán!");
          } else {
              alert("Chyba při odesílání emailu: " + result.error);
          }
      } catch (error) {
          console.error("Chyba:", error);
          alert("Nepodařilo se odeslat email.");
      }
  };

  return (
      <main className="contact" id="contact">
          <form className="contactForm">
              <h2>Contact Form</h2>
              <input type="text" placeholder="Name" id="name" name="name" required />
              <input type="email" placeholder="Email" id="email" name="email" required />
              <input type="text" placeholder="Subject" id="subject" name="subject" required />
              <textarea id="message" placeholder="Message with additional information (optional field)" name="message" required />
              <label>
                  <input type="checkbox" id="gdpr" name="gdpr" required />
                  <span>I agree to the processing of personal data.</span>
              </label>
              <button type="submit" className='formButt' onClick={(e) => clicked(e)}>SEND</button>
          </form>
          <div className="contactInfo">
              <div className='aboutButton' onClick={linkedClick}>
                  <img src="./linked.png" alt="linkedin"></img>Find me on LinkedIn
              </div>
              <div className='aboutButton' onClick={mailClick}>
                  <img src="./email.png" alt="email"></img>daniel@korous.design
              </div>
          </div>
      </main>
  )
}

export default Contact;
