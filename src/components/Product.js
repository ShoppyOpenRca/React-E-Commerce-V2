import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
import '../styles/Product.css'

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="flex flex-col">
        <div className="shadow-lg hover-trigger cursor-pointer transition duration-700 ease-in-out transform hover:scale-110 rounded-lg hover:shadow-xl">
          <ProductConsumer>
            {(value) => (
              <div
                className="bg-gray-100 py-4"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <i className="fal fa-shopping-bag  md:mt-4 mt-4 ml-48 md:ml-72"></i>
                  <img src={img} alt="product" className="object-cover" />
                </Link>
                <button
                  className="absolute hover-target -mt-8 rounded-md hover:cursor-pointer right-0 transition duration-700 ease-in transform"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize" disabled>
                      in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>

          <div className="py-4 px-8 bg-gray-50 flex flex-col items-center">
            <p className="font-bold">{title}</p>
            <br />
              <div>
                <i className="fas fa-star "></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fal fa-star"></i>
                <i className="fal fa-star"></i>
              </div>
            <br />
            <h5 className="text-black">${price}</h5>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};