import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import HeaderImg from '../head.png';
import { ButtonContainer } from '../components/Button';

const Header = () => {
    return (
        <header className="Header">
            <div className="container">
        <div className="row d-flex">
            <div className="col-lg-5 col-md-5 col-sm-5 pt-5">
                <h5 className="pt-5 title font-weight-bold">NEED TO BRING ALL YOUR MONEY IN INVESTMENT?</h5>
                <p className="pt-3 text-justify-center">Build, manage and scale the online e-commerce business.
                With Essentials, you can run your business in less time,
                with less cost.</p>
                <Link to="/shop" >
                <ButtonContainer className="button border rounded-0 text-white px-3 py-2 my-4">
                    SHOP NOW
                </ButtonContainer>
                </Link>
            </div>
            <div className="col-lg-7 flex-end mr-auto col-md-7 col-sm-7">
                <img src={HeaderImg} width="100px" height="400px" alt="header" className="image-responsive w-100" />
            </div>
        </div>
        </div>
        </header>
    )
}

export default Header;
