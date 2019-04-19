import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

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
                <h1>Registracija</h1>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Vardas:</label>

                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Jūsų vardas"
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
                                    <label>Pavardė:</label>

                                    <input
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Jūsų pavardė" 
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
                                <label>Asmens kodas:</label>

                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Jūsų asmens kodas" 
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
                                <label>Valstybė</label>

                                <input
                                    type="text" 
                                    className="form-control"
                                    placeholder="Jūsų valstybė"
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
                                <label>Miestas</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Jūsų miestas"
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
                                <label>Adresas</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Jūsų adresas"
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
                                <label>Slaptažodis</label>

                                <input
                                type="password"
                                className="form-control"
                                placeholder="Jūsų slaptažodis"
                                onChange={this.handlePasswordChange}
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