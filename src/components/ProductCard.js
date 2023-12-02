import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const { grid } = props;
  console.log(grid);
  let location = useLocation();
  return (
    <>
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={` ${
            location.pathname === "/" ? "store/product/:id" : "product/:id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="../images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="../images/watch-01.jpeg"
              className="img-fluid"
              alt="product"
            />
            <img
              src="../images/watch-02.jpeg"
              className="img-fluid"
              alt="product"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#bf4800"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              soluta quasi, quas ducimus minus accusamus possimus veritatis
              optio, qui ab commodi dolorum magnam, ratione eius at perspiciatis
              modi suscipit cumque!
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button>
                <img src="../images/prodcompare.svg" alt="compare" />
              </button>
              <button>
                <img src="../images/view.svg" alt="view" />
              </button>
              <button>
                <img src="../images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={` ${
            location.pathname === "/" ? "store/product/:id" : "product/:id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="../images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="../images/watch-01.jpeg"
              className="img-fluid"
              alt="product"
            />
            <img
              src="../images/watch-02.jpeg"
              className="img-fluid"
              alt="product"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#bf4800"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              soluta quasi, quas ducimus minus accusamus possimus veritatis
              optio, qui ab commodi dolorum magnam, ratione eius at perspiciatis
              modi suscipit cumque!
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="../images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="../images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="../images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
