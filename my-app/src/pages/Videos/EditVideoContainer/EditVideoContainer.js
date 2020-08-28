import React from 'react';
import { withRouter } from 'react-router-dom';
import VideoModel from '../../../models/video';
import './form.css';
import EditVideoButton from '../../../components/MatUI/EditVideo';

class EditVideoContainer extends React.Component {
  state = {
    title: '',
    artist: '',
    coverArtUrl: '',
    videoUrl: '',
    featured: false,
  }

  // GEET video by id to be edited and update status
  componentDidMount() {
    VideoModel.getVideoById(this.props.match.params.id)
    .then((result) => this.setState(result))
    .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    // console.log(event.target.id);
    if (event.target.value === 'on') {
      event.target.value = true;
    }
    
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    VideoModel.editVideo(this.state)
      .then((result) => {
        console.log(result);
      });
      // Redirect To Video Index (history comes from react-router-dom)
    this.props.history.push('/video');
  };

  render() {
    const { 
      title,
      artist,
      coverArtUrl,
      videoUrl,
      featured,
    } = this.state;
    console.log("in edit");
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <h4 className="auth-title">Edit Video</h4>

          <div className="form-group">
            <label htmlFor="title">Song Title</label>
            <input onChange={this.handleChange} value={title} type="text" name="title" />
          </div>

          <div className="form-group">
            <label htmlFor="artist">Artist</label>
            <input onChange={this.handleChange} value={artist} type="text" name="artist" />
          
          </div>
          
          <div className="form-group">
            <label htmlFor="coverArtUrl">Cover Art</label>
            <input onChange={this.handleChange} value={coverArtUrl} type="text" name="coverArtUrl" />
          </div>
          
          <div className="form-group">
            <label htmlFor="videoUrl">Video Url</label>
            <input onChange={this.handleChange} value={videoUrl} type="text" name="videoUrl" />
          </div>
          
          {/* <div className="form-group">
            <label htmlFor="">Featured</label>
            <input onChange={this.handleChange} type="checkbox" name="featured" />
          </div> */}

          <div className="button">
            <button type="submit">
              {/* <EditVideoButton/> */}
              Edit
              </button>
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(EditVideoContainer);
