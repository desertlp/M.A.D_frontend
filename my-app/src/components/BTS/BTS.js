import React from 'react';
import { Link } from 'react-router-dom';

import './BTS.css';

function BTS (props) {
  const { bts, list } = props;

  return (
    <Link to={`/bts/${bts._id}`}>
      <div className="bts-card">
        <section className="image-wrapper">
          <img src={bts.photoUrl} alt={bts.description} height="100" />
        </section>
        <section className="content-wrapper">
          <h4>{bts.description}</h4>
        </section>
      </div>
    </Link>
  );
}

export default BTS;
