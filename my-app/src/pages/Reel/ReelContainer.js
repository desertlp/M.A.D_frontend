
import React from 'react';
import ReelFeatures from '../../components/ReelFeatures/ReelFeatures';
import UserModel from '../../models/user';
import ReelMedia from '../../components/ReelMedia/ReelMedia';
import './ReelContainer.css';

class ReelContainer extends React.Component {
  state = {
    featuredVideos: [],
  };

  componentDidMount() {
    // Get All Videos
    const userId = localStorage.getItem('id');
    UserModel.getUserById(userId)
      .then((result) => {
        console.log(result); // result is the user object 
        this.setState({featuredVideos: result.video});
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="reel-container">
        <ReelMedia/>
        <ReelFeatures/>
      </div>
    );
  }
}

export default ReelContainer;