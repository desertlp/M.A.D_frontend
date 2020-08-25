import React from 'react';
import VideoList from '../../../components/VideoList/VideoList';
import VideoModel from '../../../models/video';

class VideoListContainer extends React.Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    // Get All Videos
    VideoModel.getAllVideos()
      .then((result) => {
        // console.log(result);
        this.setState({video: result});
      })
      .catch((err) => console.log(err))
  }

  render() {
    return <VideoList videos={this.state.videos} />;
  }
}

export default VideoListContainer;
