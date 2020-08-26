import React from 'react';
import Video from '../Video/Video';

import './VideoList.css';

function VideoList(props) {
  const videoList = props.video.map((videoObj) => {
    return <Video key={videoObj._id} game={videoObj} list={true} />
  });

  return (
    <div className="videos-container">
      {videoList}
    </div>
  );
}

export default VideoList;
