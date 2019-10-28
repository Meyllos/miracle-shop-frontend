import React, { Component } from "react";
import { Label } from "semantic-ui-react";
import Navbar from "../navbar/navbar";
import Category from '../category/categories';
import Footer from '../footer/footer';

class ResetPassword extends Component {
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
            <form className="auth-form" action="/login">
                <h1 style={{textAlign:"center"}}>Reset Password Page</h1>
                <div className="form-content">
                    <Label>Enter New Password:</Label>
                    <input type="password" placeholder="Enter new password..." />
                    <br />
                    <Label>Confirm Password:</Label>
                    <input type="password" placeholder="Confirm new password..." />
                    <br />
                    <button type="submit" className="form-btn">Reset Password</button>
                </div>
            </form>
        </div>
        <Footer />
        </>
        );
    }
};

export default ResetPassword