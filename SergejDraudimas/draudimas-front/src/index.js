import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import ChangePassword from './components/ChangePassword';

ReactDOM.render(
    <Router>
        <div>
          <Route exact path='/' component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/changepsw" component={ChangePassword} />
        </div>
    </Router>,
    document.getElementById('root')
);
