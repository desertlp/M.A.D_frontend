import React from 'react';
import { Link } from 'react-router-dom';

import './BTS.css';

function BTS (props) {
  const { bts } = props;

  return (
    <Link to={`/bts/${BTS._id}`}>
      <div className="bts-card">
        <section className="image-wrapper">
          <img src={BTS.photoUrl} alt="behind the scenes" height="100" />
        </section>
        <section className="content-wrapper">
          <h4>{BTS.description}</h4>
        </section>
      </div>
    </Link>
  );
}

export default BTS;