import React from 'react';
import { withRouter } from 'react-router-dom';
import VideoModel from '../../../models/video';
import './form.css';
// import AddVideo from '../../../components/MatUI/AddVideo';

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
    // console.log(this.state);
    VideoModel.createVideo(this.state)
      .then((result) => {
        console.log(result);
        this.props.history.push('/video');
      });
      // Redirect To Video Index (history comes from react-router-dom)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <h4 className="auth-title">Add A New Video</h4>

          <div className="form-group">
            <label htmlFor="">Song Title</label>
            <input onInput={this.handleChange} type="text" name="title" />
          </div>

          <div className="form-group">
            <label htmlFor="">Artist</label>
            <input onInput={this.handleChange} type="text" name="artist" />
          
          </div>
          
          <div className="form-group">
            <label htmlFor="">Cover Art</label>
            <input onInput={this.handleChange} type="text" name="coverArtUrl" />
          </div>
          
          <div className="form-group">
            <label htmlFor="">Video Url</label>
            <input onInput={this.handleChange} type="text" name="videoUrl" />
          </div>
          
          {/* <div className="form-group">
            <label htmlFor="">Featured</label>
            <input onInput={this.handleChange} type="checkbox" name="featured" />
          </div> */}

          <div className="button">
            <button type="submit">Add Video</button>
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(NewVideoContainer);
