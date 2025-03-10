import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [emailIsSent, setEmailIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vtscnz1",
        "template_5zxjc7a",
        e.target,
        "9TvzqSOmWJ3Y-jaNl"
      )
      .then(() => {
        setEmailIsSent(true);
      });
  };



  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>imgolammasud@gmail.com</h5>
            <a target="_blank" href="mailto:imgolammasud@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Golam Masud</h5>
            <a target="_blank" href="https://www.linkedin.com/in/golam-masud/">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        {emailIsSent ? (
          <h2 id="Contact__sent-message">
            Your Message was successfully sent!😋
          </h2>
        ) : (
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;