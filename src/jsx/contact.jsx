import { useState } from "react";
import { Helmet } from "react-helmet-async";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  gdpr: false,
};

const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState(initialFormData);

  const linkedClick = () => {
    window.open("https://www.linkedin.com/in/danielkorous/", "_blank", "noopener,noreferrer");
  };

  const mailClick = () => {
    window.location.href = "mailto:daniel@korous.design";
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (feedback) {
      setFeedback("");
      setStatus("idle");
    }
  };

  const hasRequiredFields =
    formData.name.trim() && formData.email.trim() && formData.subject.trim();
  const hasValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  const isFormValid = Boolean(hasRequiredFields && hasValidEmail && formData.gdpr);
  const isSubmitting = status === "submitting";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!hasRequiredFields) {
      setStatus("error");
      setFeedback("Please fill in your name, email and subject.");
      return;
    }

    if (!hasValidEmail) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    if (!formData.gdpr) {
      setStatus("error");
      setFeedback("You must agree to the processing of personal data.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Error occurred while sending email.");
      }

      setStatus("success");
      setFeedback(result.message || "Email sent successfully.");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
      setFeedback(error.message || "Email could not be sent.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Korous Design</title>
        <meta name="description" content="Contact us if you want to cooperate!" />
      </Helmet>
      <main className="contact" id="contact">
        <form className="contactForm" onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            id="message"
            placeholder="Message with additional information (optional field)"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {hasRequiredFields && (
            <label>
              <input
                type="checkbox"
                id="gdpr"
                name="gdpr"
                checked={formData.gdpr}
                onChange={handleChange}
                required
              />
              <span>I agree to the processing of personal data.</span>
            </label>
          )}
          <button type="submit" className="formButt" disabled={!isFormValid || isSubmitting}>
            {isSubmitting ? "SENDING..." : "SEND"}
          </button>
          <p className={`formMessage ${status}`} aria-live="polite">
            {feedback}
          </p>
        </form>
        <div className="contactInfo">
          <button type="button" className="aboutButton" onClick={linkedClick}>
            <img src="/linked.png" alt="LinkedIn" />
            Find me on LinkedIn
          </button>
          <button type="button" className="aboutButton" onClick={mailClick}>
            <img src="/email.png" alt="Email" />
            daniel@korous.design
          </button>
        </div>
      </main>
    </>
  );
};

export default Contact;
