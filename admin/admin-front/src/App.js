import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:9090/api/users/')
      .then(res => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('http://localhost:9090/api/users/'+id)
    .then(res => {
    this.setState({users:this.state.users.filter(u=>!(u.id===id))})
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              User List
            </h3>
          </div>
          <div className="panel-body">
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Creation Date</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((u, index) =>
                    <tr key={index}>
                      <td>{u.id}</td>
                      <td>{u.username}</td>
                      <td>{u.email}</td>
                      <td>{u.creationDate}</td>
                      <td><button onClick={() => this.delete(u.id)} className="btn btn-danger">Delete</button></td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
