import React from 'react';
import { Link } from 'react-router-dom';

import './Video.css';

function Video (props) {
  const { video, list } = props;

  return (
    <Link to={`/video/${Video._id}`}>
      <div className="video-card">
        <section className="image-wrapper">
          <img src={Video.coverArtUrl} alt={Video.title} height="100" />
        </section>
        <section className="content-wrapper">
          <h4>{Video.title}</h4>
          {!list && (
            <>
              <p><strong>Artist: </strong> {Video.artist}</p>
              <p><strong>Link: </strong> {Video.videoUrl}</p>
            </>
          )}
        </section>
      </div>
    </Link>
  );
}

export default Video;
