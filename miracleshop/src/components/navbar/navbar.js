import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <>
        <div className="navbar">
        <div className="logo">
            <a href="/">
            <b>Miracle</b>Shop
            </a>
        </div>
        <div className="rightLinks">
            <>
                <a href="/login" className="login">
                Login
                </a>
                <a href="/signup" className="signup">
                Get Started
                </a>
            </>
        </div>
        </div>
      </>
    );
};
  
export default Navbar;