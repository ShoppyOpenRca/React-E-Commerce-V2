import React, { Component, Fragment } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";
export default class ProductList extends Component {
  render() {
    const border = {
      border: "solid 1px #D4D4D4",
      borderRadius: "25 px",
    };
    return (
      <div className="py-8 bg-white">
        <div className="container py-16">

          {/* <div className="bg-white mt-8 navbar w-100">
            <div className="d-flex">
              <div className="nav-item p-2">All Products</div>
              <div className="nav-item pl-5 pt-2">
                Category
                <i className="fal fa-caret-down pl-2"></i>
              </div>
            </div>
            <div className="d-flex">
              <div className="justify-content-end pt-2" style={border}>
                <a href="your link here">
                  <i className="fal fa-sort-down pl-2 pr-3"></i>
                </a>
                Filter
              </div>
              <div className="justify-content-end ml-2" style={border}>
                <a href="your link here">
                  <i className="fal fa-search"></i>
                </a>
                Search
              </div>
            </div>
          </div> */}

          <div className="grid mt-8 grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 md:ml-24">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} className="col-span-1 md:col-span-3" />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    );
  }
}
