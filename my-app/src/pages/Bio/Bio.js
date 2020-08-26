import React from 'react';
import './Bio.css';
import BioInfo from '../../components/BioInfo/BioInfo';
// Material-UI Components 

const Bio = () => {
  return (
    <div>
      <div id="bio-page-backgroud-img" width="1200px" height="1200px">
        <div className="bio-page-split">
          <div id="headshot-side-bio-page">
            <img id="headshot" src="https://images.squarespace-cdn.com/content/v1/5682e741d8af10374c50892f/1550595738544-MA7B8NVTYCQ88CP1ZZZ3/ke17ZwdGBToddI8pDm48kGmScA6V2_DHTkmfhjdEzm97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZMI6X7yGUDybalAFUlJQFpALT4Jd0h1Jp53vKTUc5VLbka3MzgShcsnUbwZjk4-8w/headshot-photography-ventura-county-professional-headshots-photographer-santa-barbara-harper-point+%285%29.jpg?format=2500w"/>
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
