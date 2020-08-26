import React from 'react';
import './ContactInfo.css';

function ContactInfo() {

  return (
      <div className="contact-cards-wrapper">
        <h1>Contact firstName</h1>
        <div className="contact-card">
          <section className="content-wrapper">
            <h4>phone</h4>
            <p>(555) 555 - 5555</p>
          </section>
        </div>

        <div className="contact-card">
          <section className="content-wrapper">
            <h4>email</h4>
            <p>email@email.com</p>
          </section>
        </div>

        <div className="contact-card">
          <section className="content-wrapper">
            <h4>instagram</h4>
            <p>link to insta</p>
          </section>
        </div>
        

      </div>
  );
}

export default ContactInfo;