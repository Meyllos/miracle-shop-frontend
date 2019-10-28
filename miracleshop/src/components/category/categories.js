import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
    return (
      <>
        <div className="categories">
          <Link to="/" className="active">Home</Link>
          <Link to="/">Cake</Link>
          <Link to="/">Snacks</Link>
          <Link to="/">Jus</Link>
          <Link to="/">Beer</Link>
          <Link to="/">Car/ Bike</Link>
          <Link to="/">House</Link>
          <Link to="/">Chair</Link>
          <Link to="/">More...</Link>
        </div>
      </>
    );
};
  
export default Category;