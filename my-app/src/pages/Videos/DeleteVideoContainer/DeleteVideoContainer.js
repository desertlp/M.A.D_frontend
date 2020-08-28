import React from 'react';
import { withRouter } from 'react-router-dom';
import VideoModel from '../../../models/video';

class DeleteVideoContainer extends React.Component {
  state = {
    video: '',
  };

  handleChange = (event) => {
    // console.log(event.target.id);
    if (event.target.value === 'on') {
      event.target.value = true;
    }
    
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    VideoModel.deleteVideo(this.state)
      .then((result) => {
        console.log(result);
      });
      // Redirect To Video Index (history comes from react-router-dom)
    this.props.history.push('/video');
  }

  render() {
    return (
      <div>
        Video Has Been Deleted
      </div>
    );
  }
}

export default withRouter(DeleteVideoContainer);
