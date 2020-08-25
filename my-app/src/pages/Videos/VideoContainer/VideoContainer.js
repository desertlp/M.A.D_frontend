import React from 'react';
import Video from '../../../components/Video/Video';
import VideoModel from '../../../models/video';

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
    return <Video video={this.state.video} list={false} />;
  }
}

export default VideoContainer;
