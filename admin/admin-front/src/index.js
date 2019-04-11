import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import ChangePass from './components/ChangePass'

ReactDOM.render(
    <Router>
        <div>
          <Route exact path='/' component={App} />
          <Route exact path='/password' component={ChangePass} />
        </div>
    </Router>,
    document.getElementById('root')
  );
