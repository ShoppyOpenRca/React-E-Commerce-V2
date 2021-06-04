import React from 'react';
import { Link } from "react-router-dom";
import NavWrapper from './NavWrapper';
import '../styles/Arrivals.css';
import '../styles/Navbar.css';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({ arrival }) {
  return (
    <div className="border-none arrival">
      <div className="card-body">
        <Link to={`/arrivals/${arrival.id}`}>
          <div className="card-img">
            <div className="mx-auto">
              <i className="fal ml-4 fa-shopping-bag text-black"></i>
            </div>
            <img src={baseUrl + arrival.image} className="img-fluid" alt={arrival.title} />
          </div>
          <div className="card-footer bg-white shadow-sm d-flex flex-column align-items-center">
            <div className="mb-0 text-black">
              <p className="font-weight-bold mb-0">{arrival.title}</p>
            </div>
            <div>
              <i className="fa fa-star star"></i>
              <i className="fa fa-star star"></i>
              <i className="fa fa-star star"></i>
              <i className="fa fa-star star"></i>
            </div>
            <div className="d-flex">
              <h6 className="mb-0 text-black">${arrival.price}</h6>
              <h6 className="mb-0 oldPrice px-3">${arrival.oldPrice}</h6>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

const Home = (props) => {
  const arrivalMenu = props.arrivals.arrivals.map((arrival) => {
    return (
        <RenderMenuItem className="item" key={arrival.id} arrival={arrival} onClick={props.onClick} />
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
      <div className="arrival">
        <div className="container my-4">
          <NavWrapper className="navbar navbar-expand-sm px-sm-5 my-3">
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
          <div className="row-cols-3 row mx-2">
            {arrivalMenu}
          </div>

          <div class="d-flex my-4 justify-content-center">
            <button class="all text-white">View all</button>
          </div>
          <div className="d-flex bg">
            <h4 className="text-white font-weight-bold">GET UP TO 50% OFF</h4>
            <img src="img/off.png" className="w-25 h-25 img-fluid" alt="" />
          </div>
          <h5 className="font-weight-bold text-center pb-4">Blog</h5>
          <div className="row row-cols-3 mx-2">
            <div className="">
              <button className="btn rounded-0 px-1 py-4 bg-black">
                <p>07</p>
                <p>MAR</p>
              </button>
              <img src="/img/blog1.png" alt="" />
              <h6>The Disco Collar on the Street</h6>
              <p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors,</p>
              <Link Link to="">Read more</Link>
            </div>
            <div className="">
              <button className="btn rounded-0 px-1 py-4 bg-black">
                <p>07</p>
                <p>MAR</p>
              </button>
              <img src="/img/blog2.png" alt="" />
              <h6>The Disco Collar on the Street</h6>
              <p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors,</p>
              <Link Link to="">Read more</Link>
            </div>
            <div className="">
              <button className="btn rounded-0 px-1 py-4 bg-black">
                <p>07</p>
                <p>MAR</p>
              </button>
              <img src="/img/blog3.png" alt="" />
              <h6>The Disco Collar on the Street</h6>
              <p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors,</p>
              <Link Link to="">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;
