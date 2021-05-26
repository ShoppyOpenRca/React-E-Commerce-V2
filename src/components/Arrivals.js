import React from 'react';
import { Link } from "react-router-dom";
import NavWrapper from './NavWrapper';
import '../styles/Arrivals.css';
import '../styles/Navbar.css';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({ arrival }) {
  return (
    // <div className="col-xl-4 d-flex col-lg-4 col-md-6 col-sm-12 mt-2">
    // <div className="">
    <div className="card shadow-sm bg-white">
      <div className="card-body">
        <Link to={`/arrivals/${arrival.id}`}>
          <div className="card-img">
            <i className="fal fa-shopping-bag float-right mt-2 mr-3"></i>
            <img src={baseUrl + arrival.image} className="img-fluid" alt={arrival.title} />
          </div>
          <div className="card-footer d-flex flex-column align-items-center">
            <div className="mb-0 text-black">
              <p className="font-weight-bold mb-0">{arrival.title}</p>
            </div>
            <div>
              <i className="fa fa-star star"></i>
              <i className="fa fa-star star"></i>
              <i className="fa fa-star star"></i>
              <i className="fa fa-star star"></i>
            </div>
            <h6 className="mb-0 text-black">${arrival.price}</h6>
          </div>
        </Link>
      </div>
    </div>
    // </div>
  )
}

const ArrivalMenu = (props) => {
  const arrivalMenu = props.arrivals.arrivals.map((arrival) => {
    return (
      <div className="mt-5 mb-5" key={arrival.id}>
        <RenderMenuItem arrival={arrival} onClick={props.onClick} />
      </div>
    )
  })

  if (props.arrivals.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.arrivals.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.arrivals.errMess}</h4>
          </div>
        </div>
      </div>
    );
  }
  else
    return (
      <div>
        <NavWrapper className="navbar bg-white navbar-expand-sm px-sm-5 my-3">
          <div className="font-weight-bold text-black border-bottom-2"><span className="text-underline"> NEW ARRIVALS </span></div>
          <div className="ml-auto">
            <ul className="navbar-nav align-items-center nav-pills">
              <li className="nav-item  pr-4 active-link">
                <Link to="/shop" className="nav-link act">All</Link>
              </li>
              <li className="nav-item  pr-4">
                <Link to="/about" className="nav-link">Women's</Link>
              </li>
              <li className="nav-item  pr-4">
                <Link to="/contact" className="nav-link">Men's</Link>
              </li>
              <li className="nav-item  pr-4">
                <Link to="/contact" className="nav-link">Kid's</Link>
              </li>
              <li className="nav-item  pr-4">
                <Link to="/contact" className="nav-link">Shoes's</Link>
              </li>
              <li className="nav-item  pr-4">
                <Link to="/contact" className="nav-link">Perfume's</Link>
              </li>
            </ul>
          </div>
        </NavWrapper>
        <div className="container ">
          <div className="row-cols-3 row mx-auto">
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12"> */}
            {arrivalMenu}
          </div>
        </div>
      </div>
    );
}


export default ArrivalMenu;
