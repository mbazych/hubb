import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap'
import './Login.css';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

var centuriaStyle = {
    color: 'black'
};

var hubStyle = {
    color: '#ED9C24'
};

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
    };


    render() {
        return (
            <div className="Login">
                <div className="d-5-block">
                    <span style={centuriaStyle}>Centuria</span><span style={hubStyle}>Hub</span>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Link to="/dashboard">
                    <Button
                        className="btn=-success"
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
              </Button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default Login
