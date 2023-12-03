import React from "react";
import { Link } from "react-router-dom";

const CategorieCard = () => {
  return (
    <div className="categorie-card">
      <div className="card-image">
        <img
          src="images/shoes.jpeg"
          className="img-fluid w-100"
          alt="categorie"
        />
      </div>
      <div className="categorie-content">
        <p className="date"> 1 Oct, 2023</p>
        <h5 className="title">Shoes</h5>
        <p className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
          sed aperiam quia molestias.
        </p>
        <Link className="button" to="/categories">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default CategorieCard;
