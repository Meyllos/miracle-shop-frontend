import React from 'react';
import './css/App.css';
import Navbar from "./components/navbar/navbar";
import Category from './components/category/categories';
import Container from './components/landingPage/container';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
    <div className="App">
      <Navbar />
      <Category />
      <Container />
      <Footer/>
    </div>
    </>
  );
};
export default App;
