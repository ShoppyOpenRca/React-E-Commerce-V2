import React from 'react';
import './Header.css';
const Footer = () => {
    return (
        <div className="footer pt-3 text-white footer-widget">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <h6 className="pb-2">Quick links</h6>
                        <p>Home</p>
                        <p>Shop</p>
                        <p>About us</p>
                        <p>Contact us</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <h6 className="pb-2">New Products</h6>
                        <p>Woman cloth</p>
                        <p>Fashion accessories</p>
                        <p>Man accessories</p>
                        <p>Rubber made Toys</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <h6 className="pb-2">Support</h6>
                        <p>Frequently asked questions</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy policy</p>
                        <p>Report a payment issue</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <i className="fal fa-home-alt pr-1"></i>Kigali, Rwanda
        <small><p className="pl-4">KN 509 st. Kigali</p></small>
                        <span><i className="far fa-envelope pr-1"></i>(+250)781290105</span>
                        <small><p className="pl-4">Mon to Fri 8am to 5pm</p></small>
                        <span><i className="fas fa-phone-alt pr-1"></i>support@openrca.com</span>
                        <small><p className="pl-4">Send us your query anytime!</p></small>
                    </div>
                </div>
                <div className="row icon">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center  fa-stack">
                        <a href="https://www.instagram.com/igiranezahonorine7/"><i className="fab fa-instagram pl-5 social-info one"></i></a>
                        <a href="https://twitter.com/igiranezahonor2"><i className="fab fa-twitter pl-3 social-info one"></i></a>
                        <a href="https://www.facebook.com/igiranezAbijah"><i className="fab fa-facebook-f pl-3 social-info one"></i></a>
                        <a href="https://www.pinterest.com/higiranez/_saved/"><i className="fab fa-pinterest-p pl-3 social-info one"></i></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center pt-2">
                        <p className="align-items-center">Copyright  2021 All rights reserved This template was made  by OpenRca</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;