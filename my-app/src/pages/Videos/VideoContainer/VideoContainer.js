import React from 'react';
import Video from '../../../components/Video/Video';
import EditVideoButton from '../../../components/MatUI/EditVideo';
import DeleteVideoButton from '../../../components/MatUI/DeleteVideo';

import VideoModel from '../../../models/video';


import './VideoContainer.css';
import Axios from 'axios';

class VideoContainer extends React.Component {
  state = {
    video: {},
  };

  componentDidMount() {
    // Get All Videos
    VideoModel.getVideoById(this.props.match.params.id)
      .then((result) => {
        console.log(result);
        this.setState({video: result});
      })
      .catch((err) => console.log(err))
  }

  render() {
    console.log(this.props);
    return (
      <div className="show-video-container">
        <a target="_blank" href={this.state.video.videoUrl}>
          <Video video={this.state.video} list={false} />;
        </a>
          
        <span className="show-video-buttons">
          <EditVideoButton/>
          <DeleteVideoButton/>
        </span>
      </div>
    );
  }
}

export default VideoContainer;


