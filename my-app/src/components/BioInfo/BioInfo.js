import React from 'react';
import './BioInfo.css';

function BioInfo() {

  return (
    <div className="bio-cards-wrapper">
      <div className="bio-card">
          <section className="bio-content-wrapper">
            {/* <h4>About Me</h4> */}
            <p className="bio-content">
              After attending two colleges, living in three different states, working at a very sketchy startup, getting the internship of my dreams, and then finally graduating with a Journalism and Spanish degree from Georgia State, I still had no idea what I career path I wanted to take. I applied to at least 100 jobs, half of which I never even heard back from, and was left feeling discouraged and unqualified. I had never expected to “love” my job; I just wanted to make a decent living. 
              We had a rocky start, as there is tons of competition in Atlanta, but within a few weeks, we were booked solid. My team is made up of some of the most hardworking and talented people I know, and I would not be where I am today if I hadn’t had their guidance and support.
            </p>
          </section>
        </div>

      </div>
  );
}

export default BioInfo;