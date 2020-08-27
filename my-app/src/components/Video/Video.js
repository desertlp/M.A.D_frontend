import React from 'react';
import { Link } from 'react-router-dom';

import './Video.css';

function Video (props) {
  const { video } = props;

  return (
    <Link to={`/video/${video._id}`}>
      <div className="video-card">
        <section className="image-wrapper">
  
          <img src={video.coverArtUrl} alt={video.title} height="100" />
        </section>
        <section className="content-wrapper">
          <h4>{video.title ? video.title : ''}</h4>
          <p><strong>Artist: </strong> {video.artist ? video.artist : ''}</p>
          <p><strong>Link: </strong> {video.videoUrl ? video.videoUrl : ''}</p>
        </section>
      </div>
    </Link>
  );
}

export default Video;
