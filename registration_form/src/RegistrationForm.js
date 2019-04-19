import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class RegistrationForm extends React.Component {

    state = {
        firstName: '',
        lastName: '', 
        idNumber: '',
        country: '',
        city: '',
        adress: '',
        password: ''
    }

    handleFirstNameChange = event => {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange = event => {
        this.setState({lastName: event.target.value});
    }

    handleIdNumberChange = event => {
        this.setState({idNumber: event.target.value});
    }

    handleCountryChange = event => {
        this.setState({country: event.target.value});
    }

    handleCityChange = event => {
        this.setState({city: event.target.value});
    }

    handleAdressChange = event => {
        this.setState({adress: event.target.value});
    }

    handlePasswordChange = event => {
        this.setState({password: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const idNumber = this.state.idNumber;
        const country = this.state.country;
        const city = this.state.city;
        const adress = this.state.adress;
        const password = this.state.password;

        console.log(firstName + " " + lastName + " " + idNumber + " " + country + " " + city + " " + adress + " " + password);
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Firstname:</label>

                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Your first name"
                                    onChange={this.handleFirstNameChange}
                                    value={this.state.firstName}
                                    required 
                                />

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Lastname:</label>

                                    <input
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Your last name" 
                                        onChange={this.handleLastNameChange}
                                        value={this.state.lastName}
                                        required
                                    />

                                </div>
                        </div>
                    </div>
                        
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>ID number:</label>

                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Your ID number" 
                                    pattern="^[0-9]*$"
                                    onChange={this.handleIdNumberChange}
                                    value={this.state.idNumber}
                                    required
                                />

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Country</label>

                                <input
                                    type="text" 
                                    className="form-control"
                                    placeholder="Your country"
                                    onChange={this.handleCountryChange}
                                    value={this.state.country}
                                    required
                                />

                            </div>
                        </div>
                    </div>
                        
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>City</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your city"
                                    onChange={this.handleCityChange}
                                    value={this.state.city}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Adress</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your adress"
                                    onChange={this.handleAdressChange}
                                    value={this.state.value}
                                    required
                                />

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Password:</label>

                                <input
                                type="password"
                                className="form-control"
                                placeholder="Your password"
                                onChange={this.handlePasswordChange}
                                value={this.state.password}
                                required
                                />

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">

                                <input type="submit" className="btn btn-primary" />
                                
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }

}

export default RegistrationForm;