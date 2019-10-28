import React, { Component } from "react";
import { Label } from "semantic-ui-react";
import Navbar from "../navbar/navbar";
import Category from '../category/categories';
import Footer from '../footer/footer';

class Signup extends Component {
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
                <h1 style={{textAlign:"center"}}>Signup Page</h1>
                <div className="form-content">
                <Label>First Name:</Label>
                    <input type="text" placeholder="Enter your firstname..." />
                    <br />
                    <Label>Last Name:</Label>
                    <input type="text" placeholder="Enter your lastname..." />
                    <br />
                    <Label>Email:</Label>
                    <input type="text" placeholder="Enter your email..." />
                    <br />
                    <Label>Password:</Label>
                    <input type="password" placeholder="Enter your password..." />
                    <br />
                    <button type="submit" className="form-btn">Create Account</button>
                </div>
            </form>
        </div>
        <Footer />
        </>
        );
    }
};

export default Signup