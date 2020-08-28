import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // higher order 
import axios from 'axios'; // npm install axios
import { API_URL } from "../../utils/consts";
import './auth.css';
import SignUp from '../MatUI/SignUp';

class Register extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    company: '',
    reelUrl: '',
    bio: '',
    headshotUrl: '', 
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${API_URL}/auth/register`, this.state)
      .then((res) => {
        console.log(res);
        this.props.history.push('/login');
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
        console.log(err.response.data.message);
      })
    };

  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        
        <h4 className="auth-title">Sign Up</h4>

        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input onChange={this.handleChange} type="email" id="email" name="email"/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input onChange={this.handleChange} type="password" id="password" name="password"/>
        </div>

        <div className="form-group">
          <label htmlFor="name">First</label>
          <input onChange={this.handleChange} type="firstName" id="firstName" name="firstName"/>
        </div>

        <div className="form-group">
          <label htmlFor="name">Last</label>
          <input onChange={this.handleChange} type="lastName" id="lastName" name="lastName"/>
        </div>

        <div className="form-group">
          <label htmlFor="name">Company</label>
          <input onChange={this.handleChange} type="company" id="company" name="company"/>
        </div>

        <div className="form-group">
          <label htmlFor="name">Link to Reel</label>
          <input onChange={this.handleChange} type="reelUrl" id="reelUrl" name="reelUrl"/>
        </div>

        <div className="form-group">
          <label htmlFor="name">bio</label>
          <input onChange={this.handleChange} type="bio" id="bio" name="bio"/>
        </div>

        <div className="form-group">
          <label htmlFor="name">Link to Headshot</label>
          <input onChange={this.handleChange} type="headshotUrl" id="headshotUrl" name="headshotUrl"/>
        </div>

        <div className="button">
          <button className="btn btn-primary float-right" type="submit"><SignUp/></button>
        </div>
      

   
      </form>
    )
  }
};

// export default withRouter(Register);
export default (Register);
