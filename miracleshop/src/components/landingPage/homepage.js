import React, { Component }  from 'react';
import Navbar from "./../navbar/navbar";
import Category from './../category/categories';
import Container from './container';
import Footer from './../footer/footer';

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
            <div className="homepage">
                <Navbar />
                <Category />
                <Container />
                <Footer/>
            </div>
            </>
        );
    }
};
