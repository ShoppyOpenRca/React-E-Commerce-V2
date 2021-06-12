import React, { Component } from 'react';

import '../styles/Contact.css';

import contactImg from '../images/Rectangle 106.png'
import Mapping from './mapp.js'

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <img src={contactImg} alt="you can get in touch" marginLeft={0} width="1500" height="300" />
        </div>
        <div className="pl-5 mb-4 row">
          <div className=" col-md-6 ">
            <h4>Contact Us</h4>
            <p>
              As you might expect of a company that began as a high-end interiors contractor,
                      we pay strict attention</p>
            <h5>America</h5>
            <p>
              195 E Parker Square Dr, Parker, CO 801 +43 982-314-0958
                  </p>
            <h5>France</h5>
            <p>
              109 Avenue Léon, 63 Clermont-Ferrand  +12 345-423-9893
                  </p>
          </div>

          <div className="w-30 col-md-6 ">
            <h4> Get in touch </h4>
            <form>
              <input type="text" placeholder=" Enter your name" className="input1 mr-3 " />

              <input type="text" placeholder="Enter your Email" className="input1" /> <br />
              <input type="text" placeholder="Enter subject " className="mt-3 mb-3" /><br />

              <input type="text"
                name="textValue"
                onChange={this.handleChange}
                placeholder="Enter the message"
                className="mb-4"
              />

              <button>SEND MESSAGE</button>
            </form></div>

        </div>

        <Mapping />
      </div>);
  }
}
export default Contact;