import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Label } from "semantic-ui-react";
import Navbar from "../navbar/navbar";
import Category from '../category/categories';
import Footer from '../footer/footer';

class ForgetPassword extends Component {
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
            <form className="auth-form" action="/reset-password">
                <h1 style={{textAlign:"center"}}>Forgot Password Page</h1>
                <div className="form-content">
                    <Label>Enter Email:</Label>
                    <input type="text" placeholder="Enter your email..." />
                    <br />
                    <button type="submit" className="form-btn">Submit</button>

                    <p style={{textAlign:"center"}}><Link to="/login" className="forget-password"> Return to Login </Link></p>
                </div>
            </form>
        </div>
        <Footer />
        </>
        );
    }
};

export default ForgetPassword