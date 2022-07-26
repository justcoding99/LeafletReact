import React from "react";
import  { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom';  

import axios from 'axios';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  submitForm(event) {
    event.preventDefault();
    let _this = this;
    axios.post('http://127.0.0.1:5000/signup', {
      name: _this.state.username,
      email: _this.state.email,
      password: _this.state.password
    })
    .then(function (response) {
      console.log(response.data);
      alert("Signed up")
    })
    .catch(function (error) {
      console.log(error);
      alert("SIGNUP FAILED")
    });

  }

  render() {
    const { username, password, email } = this.state;
    return (
      <form onSubmit={(e) => this.submitForm(e)}>
        <label htmlFor="username">Username  </label>
        <input
          name="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={this.handleChange}
        />
        <label htmlFor="username">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="username">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit" >Signup</button>
      </form>
    
    );
    
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
  };
}

export default withRouter(SignupForm);