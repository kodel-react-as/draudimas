import React, { Component } from 'react';
import axios from 'axios';
import AuthService from './AuthService';
import IfAuthorized from './IfAuthorized';

const Auth = new AuthService();

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userProfile: []
        };
    }

    handleLogout() {
        Auth.logout();
        this.props.history.replace('/login');
    }

    componentDidMount() {
        var header = {
            headers: {
               Authorization: "Bearer " + localStorage.getItem('accessToken')
            }
         }
        axios.get('http://localhost:9090/api/user/me', header)
        .then(res => {
            this.setState({userProfile: res.data});
            console.log(this.state.userProfile);
        })
    }

    render() {
        return (
            <div className="">
                <div className="">
                    <h2>Welcome {this.state.userProfile.username}</h2>
                </div>
            <p className="">
                <button type="button" className="" onClick={this.handleLogout.bind(this)}>Logout</button>
            </p>
          </div>
        );
    }
}

export default IfAuthorized(UserProfile);