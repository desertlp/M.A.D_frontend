import React from 'react';
import './Home.css';
import Landing from '../../components/Landing/Landing';
// Material-UI Components 
import RegisterButton from '../../components/MatUI/RegisterButton';

const Home = () => {
  return (
    <div>

      <img 
        src="https://mk0peerspaceresco37i.kinstacdn.com/wp-content/uploads/photo-1490971512195-3385e8e72ab4-1200x600.jpg"
        width="100%"
      />

      <div className="float">
        <div id="register-button">
          <RegisterButton/>
        </div>
        {/* <h1 className="home-h1">Major Art Departments</h1> */}
        <Landing/>
      </div>

    </div>
  );
}

export default Home;
