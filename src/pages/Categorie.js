import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import CategorieCard from "../components/CategorieCard";
import Container from "../components/Container";

const Categorie = () => {
  return (
    <>
      <Meta title={"Categories"} />
      <BreadCrumb title="Categories" />
      <Container class1="categorie-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Phone & Tablet </li>
                  <li>Tv & Hi Tech </li>
                  <li>Computer science </li>
                  <li>Home, kitchen & office </li>
                  <li>Home appliance </li>
                  <li>Clothing & shoes </li>
                  <li>Accessories </li>
                  <li>Video games & Consoles </li>
                  <li>Sports </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3">
                <CategorieCard />
              </div>
              <div className="col-6 mb-3">
                <CategorieCard />
              </div>
              <div className="col-6 mb-3">
                <CategorieCard />
              </div>
              <div className="col-6 mb-3">
                <CategorieCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Categorie;
