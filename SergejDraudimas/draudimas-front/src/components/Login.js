import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import AuthService from './AuthService';

class Login extends Component {
    constructor(props){
        super(props);
        this.username = React.createRef()
        this.password = React.createRef()
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Auth = new AuthService();
    }

    handleSubmit(event) {
        event.preventDefault();

        this.Auth.login(this.username.current.value, this.password.current.value)
        .then(event =>{
            this.props.history.replace('/profile');
         })
         .catch(err =>{
             alert(err);
         });
      }

    redirectReg = () => {
        this.props.history.push(`/register`);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                
                    <label>Username</label>
                    <input type="text" ref={this.username} />
                    
                    <label>Password</label>
                    <input type="text" ref={this.password} />
                    
                    <input type="submit" value="Submit" />
                </form>
                <span className="input-group-btn">
                    <Link to="/register">Click to Register</Link>
                </span>
            </div>
        );
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default Login;