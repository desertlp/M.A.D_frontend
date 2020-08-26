import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // higher order 
import axios from 'axios'; // npm install axios
import { API_URL } from "../../utils/consts"

class Register extends Component {
  state = {
    email: '',
    password: '',
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
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input onChange={this.handleChange} type="email" id="email" name="email"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input onChange={this.handleChange} type="password" id="password" name="password"/>
        </div>
        <button className="btn btn-primary float-right" type="submit">Register</button>
      </form>
    )
  }
};

// export default withRouter(Register);
export default (Register);
