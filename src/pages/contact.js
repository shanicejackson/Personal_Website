import React from 'react';
import ContactForm from '../components/contactform';
import '../styling/contactform.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Get In Touch</h1>
      <p className="contact-intro">
        Feel free to reach out with any questions, ideas, or just to say hello!
      </p>
      <ContactForm />
    </div>
  );
}

export default Contact;