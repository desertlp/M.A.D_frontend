import React from 'react';
import { withRouter } from 'react-router-dom';
import UserModel from '../../models/user';
import EditProfile from '../../components/MatUI/EditProfile';

class Profile extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',
    company: '',
    position: '',
    logoUrl: '',
    reelUrl: '',
    bio: '',
    headshotUrl: '',
  };

  handleChange = (event) => {
    console.log(event.target.id);
    if (event.target.value === 'on') {
      event.target.value = true;
    }
    
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    UserModel.editUser(this.state)
      .then((result) => {
        console.log(result);
      });
      // Redirect To BTS Index (history comes from react-router-dom)
    this.props.history.push('/bts');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <h4 className="auth-title">Edit Profile</h4>

          <div className="form-group">
            <label htmlFor="">First</label>
            <input onInput={this.handleChange} type="text" name="firstName"/>
          </div>

          <div className="form-group">
            <label htmlFor="">Last</label>
            <input onInput={this.handleChange} type="text" name="lastName" />
          </div>

          <div className="form-group">
            <label htmlFor="">Company</label>
            <input onInput={this.handleChange} type="text" name="company" />
          </div>

          <div className="form-group">
            <label htmlFor="">Position</label>
            <input onInput={this.handleChange} type="text" name="position" />
          </div>

          <div className="form-group">
            <label htmlFor="">email</label>
            <input onInput={this.handleChange} type="text" name="email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="">Phone</label>
            <input onInput={this.handleChange} type="text" name="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="">Link To Reel</label>
            <input onInput={this.handleChange} type="text" name="reelUrl" />
          </div>
        
          <div className="form-group">
            <label htmlFor="">Link To Headshot</label>
            <input onInput={this.handleChange} type="text" name="headshotUrl" />
          </div>

          <div className="form-group">
            <label htmlFor="">Bio</label>
            <input onInput={this.handleChange} type="text" name="bio" />
          </div>
          
          <div className="button">
            <button type="submit"><EditProfile/></button>
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(Profile);
