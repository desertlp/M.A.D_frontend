import React from 'react';
import { withRouter } from 'react-router-dom';
import VideoModel from '../../../models/video';

class NewVideoContainer extends React.Component {
  state = {
    title: '',
    artist: '',
    coverArtUrl: '',
    videoUrl: '',
    featured: false,
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
    VideoModel.createVideo(this.state)
      .then((result) => {
        console.log(result);
      });
      // Redirect To Video Index (history comes from react-router-dom)
    this.props.history.push('/video');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <h2>Add A New Video</h2>

          <div>
            <label htmlFor="">Title</label>
            <input onInput={this.handleChange} type="text" name="title" />
          </div>

          <div>
            <label htmlFor="">Artist</label>
            <input onInput={this.handleChange} type="text" name="artist" />
          
          </div>
          
          <div>
            <label htmlFor="">Cover Art</label>
            <input onInput={this.handleChange} type="text" name="coverArtUrl" />
          </div>
          
          <div>
            <label htmlFor="">Video Url</label>
            <input onInput={this.handleChange} type="text" name="videoUrl" />
          </div>
          
          <div>
            <label htmlFor="">Featured</label>
            <input onInput={this.handleChange} type="checkbox" name="featured" />
          </div>

          <button type="submit">Add Video</button>

        </form>
      </div>
    );
  }
}

export default withRouter(NewVideoContainer);
