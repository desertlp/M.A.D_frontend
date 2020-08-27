import React from 'react';
import './VideoIndex.css';
import VideoListContainer from './VideoListContainer/VideoListContainer';

// Material-UI Components 
import NewVideoButton from '../../components/MatUI/NewVideoButton';

const VideoIndex = () => {
  return (
    <div>
        <div className="video-index-cards-wrapper">
            <div className="video-index-card">
                <VideoListContainer/>
            </div>
            <NewVideoButton/>
        </div>
    </div>
  );
}

export default VideoIndex;
