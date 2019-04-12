import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class RegistrationForm extends React.Component {

    render() {
        return(
            <div className="container">

                <form className>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Firstname:</label>
                                <input type="text" className="form-control" name="FirstName" placeholder="Your first name" required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Lastname:</label>
                                <input type="text" className="form-control" name="LastName" placeholder="Your last name" required />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>ID number:</label>
                                <input type="text" className="form-control" name="personIdNumber" placeholder="Your ID number" pattern="^[0-9]*$" required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Country</label>
                                <input type="text" className="form-control" name="country" placeholder="Your country" required />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" className="form-control" name="city" placeholder="Your city" required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Adress</label>
                                <input type="text" className="form-control" name="adress" placeholder="Your adress" required />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" className="form-control" name="password" placeholder="Your password" required />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
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