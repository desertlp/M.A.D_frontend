import React from 'react';
import { Link } from 'react-router-dom';
import ReelMedia from '../ReelMedia/ReelMedia';

import './Reel.css';

function Reel (props) {
  const { user } = props;

  return (
    <Link to={`/reel`}>
      <div className="reel-card">
        <section className="image-wrapper">
          <img src={user.reelUrl} alt="reel" height="200" />
        </section>
        <section className="content-wrapper">
          <h4>{user.firstName} {user.lastName}, {user.Company}</h4>
        </section>
      </div>
    </Link>
  );
}

export default Reel;

