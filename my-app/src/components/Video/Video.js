import React from 'react';
import { Link } from 'react-router-dom';

import './Video.css';

function Video (props) {
  const { video, list } = props;

  return (
    <Link to={`/video/${video._id}`}>
      <div className="video-card">
        <section className="image-wrapper">
          <img src={video.coverArtUrl} alt={video.title} height="100" />
        </section>
        <section className="content-wrapper">
          <h4>{video.title}</h4>
          {!list && (
            <>
              <p><strong>Artist: </strong> {video.artist}</p>
              <p>Released: {video.releaseDate}</p>
            </>
          )}
        </section>
      </div>
    </Link>
  );
}

export default Video;
