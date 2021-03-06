import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div>
              {/* title */}
              <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End of title */}
              {/* product info */}
              <div className="row">
                {/* product text */}
                <div className="col-10 mx-auto col-md-4 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    product description:
                  </p>
                  <p className="text-muted">{info}</p>
                </div>
                <div className="col-10 mx-auto col-md-4 my-3 pl-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-4 text-capitalize d-flex justify-content-center align-items-center">
                    <Link to="/shop">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in Cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
              </div>
            </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
