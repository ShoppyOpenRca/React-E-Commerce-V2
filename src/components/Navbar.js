import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import logo from "../Shopy.svg";
import styled from "styled-components";
import '../Pages/Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar bg-white navbar-expand-sm px-sm-5">
        <Link to="/home">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <div className="ml-auto">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item  pr-4">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item  pr-4">
              <Link to="/shop" className="nav-link">Shop</Link>
            </li>
            <li className="nav-item  pr-4">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item  pr-4">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <span className="mr-2">
            <i className="fal fa-search"></i>
            <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
            <i className="fal fa-user"></i>

          </span>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-link {
    color: var(--mainBlack) !important;
    text-transform: capitalize;
  }
`;
