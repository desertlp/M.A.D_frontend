import React from 'react';
import './Landing.css';

function Landing() {

  return (
      <div className="landing-cards-wrapper">
        
        <div className="landing-card">
          <section className="content-wrapper">
            <h4>Browse</h4>
            <p>Industry professional can search and browse through set designers's profiles to find the right match for their upcoming shoot</p>
          </section>
        </div>

        <div className="landing-card">
          <section className="content-wrapper">
            <h4>Build</h4>
            <p>Set designers and industry professionals can create and manage a flawless portfolio in just inues. Share your portfolio link directly frmo the site to potential clients.</p>
          </section>
        </div>

        <div className="landing-card">
          <section className="content-wrapper">
            <h4>Hire</h4>
            <p>Contact designers directly frmo the site to ask for a meeting, external references, or their next availability for bookings.</p>
          </section>
        </div>

      </div>
  );
}

export default Landing;