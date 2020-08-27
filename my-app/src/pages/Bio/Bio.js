import React from 'react';
import './Bio.css';
import BioInfo from '../../components/BioInfo/BioInfo';
import BioPic from '../../components/BioPic/BioPic';

// Material-UI Components 

const Bio = () => {
  return (
    <div>
      <div id="bio-page-backgroud-img" width="1200px" height="1200px">
        <div className="bio-page-split">
          
          <div id="headshot-side-bio-page">
            <BioPic/>
          </div>
          
          <div id="blurb-side-bio-page">
            <BioInfo/>
          </div>


        </div>
      </div>

      <div className="float">
        <p></p>
      </div>

    </div>
  );
}

export default Bio;
