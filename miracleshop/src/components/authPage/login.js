import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Label } from "semantic-ui-react";
import Navbar from "../navbar/navbar";
import Category from '../category/categories';
import Footer from '../footer/footer';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
        <>
        <Navbar />
        <Category />
        <div className="form-Container">
            <form className="auth-form">
                <h1 style={{textAlign:"center"}}>Login Page</h1>
                <div className="form-content">
                    <Label>Email:</Label>
                    <input type="text" placeholder="Enter your email..." />
                    <br />
                    <Label>Password:</Label>
                    <input type="password" placeholder="Enter your password..." />
                    <br />
                    <button type="submit" className="form-btn">Login</button>

                    <p style={{textAlign:"center"}}><Link to="forgot-password" className="forget-password"> Forgot password ?</Link></p>
                </div>
            </form>
        </div>
        <Footer />
        </>
        );
    }
};

export default Login