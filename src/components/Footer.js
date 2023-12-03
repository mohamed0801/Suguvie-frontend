import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno: 123, Near Central Market, <br /> Bamako, District de
                  Bamako, Mali <br />
                  PinCode: 95101
                </address>
                <a
                  href="tel:+223 78475906"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +223 78 47 59 06
                </a>
                <a
                  href="mailto:abassemohamed08@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  abassemohamed08@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <FaXTwitter className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsWhatsapp className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsFacebook className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Informations</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/shipping-policy">
                  Shipping Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/refund-policy">
                  Refund Policy
                </Link>
                <Link
                  className="text-white py-2 mb-1"
                  to="/terms-and-conditions"
                >
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1" to="categories">
                  Categories
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="">
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  FAQ
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4"> Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="">
                  Phone & Tablet
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Computer science
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Clothing & shoes
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Accessories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by Mohamed Abasse
                Diakite
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
