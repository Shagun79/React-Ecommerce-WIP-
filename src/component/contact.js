import React, { useContext } from "react";
import Header from "./header";
import Footer from "./footer";

const Contact = () => {
  const height = -35;
  return (
    <>
      <Header />
      <div className="contact">
        <h2 className="common-heading"> Contact Page</h2>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613169408337!2d73.9166943!3d18.562253999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1693901351294!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-form">
          <form
            action="https://formspree.io/f/moqowped"
            className="contact-input"
            method="POST"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"
            />

            <input type="submit" value="send" className="Btn" />
          </form>
        </div>
      </div>
      <Footer height={height} />
    </>
  );
};

export default Contact;
