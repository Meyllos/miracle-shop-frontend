import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <>
        <div className="navbar">
        <div className="logo">
            <Link to="/">
            <b>Miracle</b>Shop
            </Link>
        </div>
        <div className="rightLinks">
            <>
                <Link to="/login" className="login">
                  Login
                </Link>
                <Link to="/signup" className="signup">
                  Get Started
                </Link>
            </>
        </div>
        </div>
      </>
    );
};
  
export default Navbar;