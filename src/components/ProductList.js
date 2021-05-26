import React, { Component, Fragment } from "react";
import Product from "./Product";
import Other from './Other';

import { ProductConsumer } from "../context";
import styled from "styled-components";
export default class ProductList extends Component {
  
  render() {
    const border = {
        border: 'solid 1px #D4D4D4',
        borderRadius: '25 px'
  };
    return (
      <Fragment>
        <div className="py-5 bg-white">
          <div className="container">
          <NavWrapper className="navbar bg-white w-100">
        <div className="d-flex">
          <div className="nav-item p-2">All Products</div>
          <div className="nav-item pl-5 pt-2">Category
          <i className="fal fa-caret-down pl-2"></i></div>
        </div>
        <div className="d-flex">
          <div className="justify-content-end pt-2" style={border}><a href="your link here"><i className="fal fa-sort-down pl-2 pr-3"></i></a>Filter</div>
          <div className="justify-content-end ml-2" style={border}><a href="your link here"><i className="fal fa-search"></i></a>Search</div>
        </div>
        </NavWrapper>
            
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
            <Other />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
          
        </div>
      </Fragment>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-link, a {
    color: var(--mainBlack) !important;
    text-transform: capitalize;
  }
  
`;