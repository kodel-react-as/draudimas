import React, { Component } from 'react';
import axios from 'axios';

class ChangePassword extends Component {
  
  constructor (props) {
    super(props);

    this.password = React.createRef();
    this.checkPassword = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(event) {
    event.preventDefault();

    let config = {
        headers: {Authorization: "Bearer " + localStorage.getItem('accessToken')}
      }
   
    axios.post(
      'http://localhost:9090/api/user/changepsw/', {
        'password': this.password.current.value
      }, config
    );
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      
        <label>Password</label>
        <input type="password" ref={this.password} />
        
        <label>Repeat Password</label>
        <input type="password" ref={this.checkPassword} />
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
  
  }
  
  
  export default ChangePassword;
