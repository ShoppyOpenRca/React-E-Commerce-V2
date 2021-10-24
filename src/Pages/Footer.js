import React from "react";
import "../styles/Header.css";
const Footer = () => {
  return (
    <div className="footer py-16 bg-black text-white footer-widget">
      <div className="grid gap-4 md:grid-cols-4 grid-cols-1">
        <div className="md:pl-32">
          <h6 className="pb-2 font-bold">Quick links</h6>
          <p>Home</p>
          <p>Shop</p>
          <p>About us</p>
          <p>Contact us</p>
        </div>
        <div className="">
          <h6 className="pb-2 font-bold">New Products</h6>
          <p>Woman cloth</p>
          <p>Fashion accessories</p>
          <p>Man accessories</p>
          <p>Rubber made Toys</p>
        </div>
        <div className="">
          <h6 className="pb-2 font-bold">Support</h6>
          <p>Frequently asked questions</p>
          <p>Terms & Conditions</p>
          <p>Privacy policy</p>
          <p>Report a payment issue</p>
        </div>
        <div className="">
          <i className="fal fa-home-alt pr-1 font-bold"></i>Kigali, Rwanda
          <small>
            <p className="pl-4">KN 509 st. Kigali</p>
          </small>
          <span>
            <i className="far fa-envelope pr-1"></i>(+250)781290105
          </span>
          <small>
            <p className="pl-4">Mon to Fri 8am to 5pm</p>
          </small>
          <span>
            <i className="fas fa-phone-alt pr-1"></i>support@openrca.com
          </span>
          <small>
            <p className="pl-4">Send us your query anytime!</p>
          </small>
        </div>
      </div>
      <div className="grid justify-items-stretch mt-8">
        <div className="justify-self-center pt-4">
          <div className="flex flex-row">
            <a href="https://www.instagram.com/igiranezahonorine7/">
              <i className="fab fa-instagram pl-5 text-white transform  hover:scale-105 hover:opacity-75 transition duration-300 cursor-pointer"></i>
            </a>
            <a href="https://twitter.com/igiranezahonor2">
              <i className="fab fa-twitter pl-3 text-white transform  hover:scale-105 hover:opacity-75 transition duration-300 cursor-pointer"></i>
            </a>
            <a href="https://www.facebook.com/igiranezAbijah">
              <i className="fab fa-facebook-f pl-3 text-white transform  hover:scale-105 hover:opacity-75 transition duration-300 cursor-pointer"></i>
            </a>
            <a href="https://www.pinterest.com/higiranez/_saved/">
              <i className="fab fa-pinterest-p pl-3 text-white transform  hover:scale-105 hover:opacity-75 transition duration-300 cursor-pointer"></i>
            </a>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-center text-lg">
            Copyright © {new Date().getFullYear()} All rights reserved This
            template was made by OpenRca
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
