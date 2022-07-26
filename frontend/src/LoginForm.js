import React from "react";

import { withRouter } from 'react-router-dom';  
import axios from 'axios';

class LoginForm extends React.Component {
  constructor(props) {    
    super(props);
  
    this.state = {
      username: "",
      password: ""
    };
  }  

 
  submitForm(event) {
    event.preventDefault();
    let _this = this;
    axios.post('http://127.0.0.1:5000/login', {
      name: _this.state.username,
      password: _this.state.password
    })
    .then(function (response) {
      console.log(response.data)
      let path = `/leaflet`;
      _this.props.history.push(path);
    })
    .catch(function (error) {
      console.log(error);
      alert("SIGNUP FAILEDDDD")
    });

  
  }
  

  render() {
    const { username, password } = this.state;
    return (
      
      <form onSubmit={(e) => this.submitForm(e)}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Enter your username"
          value={username}
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
        <button type="submit" >Login</button>
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


export default withRouter(LoginForm);