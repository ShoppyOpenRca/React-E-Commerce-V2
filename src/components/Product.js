import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-4">
        <div className="card w-75">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-2"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                <i className="fal fa-shopping-bag float-right align-top"></i>
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex flex-column align-items-center">
            <p className="align-self-center mb-0">{title}</p><br />
            <Star>
            <span className="star d-flex align-self-center">
                <i className="fas fa-star "></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fal fa-star"></i>
                <i className="fal fa-star"></i>
            </span>
          </Star><br />
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
const Star = styled.div`
.star{
  color: #F3DC0A;
}
`
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
    padding: 3px !important;
  }
  .card {
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
  }
  &:hover {
    .card-footer {
      background: rgba(247, 247, 247);
      padding: 5px !important;
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    background-color: #F3F5FF;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.6s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
