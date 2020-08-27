import React from 'react';
import VideoList from '../../../components/VideoList/VideoList';
import UserModel from '../../../models/user';

class VideoListContainer extends React.Component {
  state = {
    video: [],
  };

  componentDidMount() {
    // Get All Videos
    const userId = localStorage.getItem('id');
    UserModel.getUserById(userId)
      .then((result) => {
        console.log(result); // result is the user object 
        this.setState({video: result.video});
      })
      .catch((err) => console.log(err))
  }

  render() {
    return <VideoList video={this.state.video} />;
    
  }
}

export default VideoListContainer;
