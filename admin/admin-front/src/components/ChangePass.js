import React, { Component } from 'react';
import axios from 'axios';

class ChangePass extends Component {
  
  constructor (props) {
    super(props);

    this.username = React.createRef()
    this.password = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(event) {
    event.preventDefault();

    console.log({
      'username': this.username.current.value,
      'password': this.password.current.value
    });
   
    axios.post(
      'http://localhost:9090/api/users/password/',
      {
        'username': this.username.current.value,
        'password': this.password.current.value
      }
    );
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      
        <label>Username</label>
        <input type="text" ref={this.username} />
        
        <label>Password</label>
        <input type="text" ref={this.password} />
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
  
  }
  
  
  export default ChangePass;
