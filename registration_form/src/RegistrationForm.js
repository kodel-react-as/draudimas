import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import axios from 'axios';

class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '', 
            idNumber: '',
            country: '',
            city: '',
            adress: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        const customer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            idNumber: this.state.idNumber,
            country: this.state.country,
            city: this.state.city,
            adress: this.state.adress,
            password: this.state.password
        };

        const postUrl = "http://demo0725191.mockable.io/post_data";

        axios.post(postUrl, {customer}).then(
            response => {console.log(response);}
        )
        
        console.log(customer);
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                <h1>Registracija</h1>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Vardas:</label>

                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Jūsų vardas"
                                    name="firstName"
                                    pattern="^[A-Za-z]*$"
                                    maxLength="45"
                                    onChange={this.handleChange}
                                    value={this.state.firstName}
                                    required 
                                />

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Pavardė:</label>

                                <input
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Jūsų pavardė"
                                    name="lastName" 
                                    pattern="^[A-Za-z]*$"
                                    maxLength="45"
                                    onChange={this.handleChange}
                                    value={this.state.lastName}
                                    required
                                />

                            </div>
                        </div>
                    </div>
                        
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Asmens kodas:</label>

                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Jūsų asmens kodas" 
                                    name="idNumber"
                                    pattern="^[0-9]*$"
                                    maxLength="11"
                                    onChange={this.handleChange}
                                    value={this.state.idNumber}
                                    required
                                />

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Valstybė</label>

                                <input
                                    type="text" 
                                    className="form-control"
                                    placeholder="Jūsų valstybė"
                                    name="country"
                                    pattern="^[A-Za-z]*$"
                                    maxLength="45"
                                    onChange={this.handleChange}
                                    value={this.state.country}
                                    required
                                />

                            </div>
                        </div>
                    </div>
                        
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Miestas</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Jūsų miestas"
                                    name="city"
                                    pattern="^[A-Za-z]*$"
                                    maxLength="45"
                                    onChange={this.handleChange}
                                    value={this.state.city}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Adresas</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Jūsų adresas"
                                    name="adress"
                                    maxLength="45"
                                    onChange={this.handleChange}
                                    value={this.state.adress}
                                    required
                                />

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Slaptažodis</label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Jūsų slaptažodis"
                                    name="password"
                                    maxLength="45"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    required
                                />

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group button">

                                <input type="submit" className="btn btn-primary" value="Patvirtinti" />
                                
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }

}

export default RegistrationForm;