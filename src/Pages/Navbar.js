// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../../images/Shopy.png';
// import styled from 'styled-components';
// const Navbar = () => {
//     return (
//       <NavWrapper className="navbar bg-white navbar-expand-sm navbar-dark px-sm-5">
//         <h1 to="/">
//             <img src={logo} alt="store" className="navbar-brand" />
//         </h1>
//         <div className="ml-auto">
//         <ul className="navbar-nav align-items-center ">
//                 <li className="nav-item  pr-4">
//                     <Link to="/" className="nav-link">Home</Link>
//                 </li>
//                 <li className="nav-item  pr-4">
//                     <Link to="/shop" className="nav-link">Shop</Link>
//                 </li>
//                 <li className="nav-item  pr-4">
//                     <Link to="/about" className="nav-link">About</Link>
//                 </li>
//                 <li className="nav-item  pr-4">
//                     <Link to="/contact" className="nav-link">Contact</Link>
//                 </li>
//         </ul>
//         </div>
//         <Link to="/cart" className="ml-auto pr-auto">
//                 <span className="mr-2">
//                         <i className="fal fa-search"></i>
//                         <i className="fas fa-shopping-cart"></i>
//                         <i className="fal fa-user"></i>     
//                 </span>
//         </Link>
//       </NavWrapper>
//     );
//   }
// const NavWrapper = styled.nav`
// background: var(--mainBlue);
// .nav-link {
//     color: var(--mainWhite) !important;
//     font-size: 1.3rem;
//     text-transform: capitalize;
// }
// `;
// export default Navbar;