import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends Component{
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        // const body = JSON.stringify(userData);
        axios.post('http://localhost:5000/admin/login',{userData})
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));

        // async function makePostRequest(){
        //     let res = await axios.post('http://localhost:5000/admin/login');
        //     console.log(`Dara: ${res.data}`);
        // }
        // makePostRequest();
        // fetch("http://localhost:5000/admin/login", {
        //     method: "POST",
        //     headers: {'Content-Type':'application/x-www-form-urlencoded'},
        //     body: JSON.stringify(userData)
        // });
        
        console.log(userData);
        
    };
    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div style={{ marginTop: "4rem" }} className="row">
                    <div className="col s8 offset-s2">
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Login </b> below
                            </h4>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.username}
                                    error={errors.username}
                                    id="username"
                                    type="text"
                                />
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="col s12" style={{ paddingLeft:"11.250px"}}>
                                <button style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }} type="submit" className="btn btn-large waves-effect
                                waves-light hoverable blue accent-3"> 
                                Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;