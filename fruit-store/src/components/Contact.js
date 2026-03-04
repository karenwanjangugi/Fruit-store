import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-box">
          <div className="contact-info">
            <h2 className="section-title">Get In Touch</h2>
            <p>Ready to start your next big project? We're here to help you bring it to life.</p>
            <div className="contact-details">
              <p><strong>Email:</strong> hello@aura-studio.com</p>
              <p><strong>Phone:</strong> +254 1234567</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Tell us about your project" rows="5" required></textarea>
            <button type="submit" className="cta-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
