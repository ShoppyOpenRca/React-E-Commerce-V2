import React, { Component } from 'react';

import '../styles/Contact.css';
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
          <div className="mb-5 mt-5" >  
            <h4>Contact Us</h4>
            <p className="text-center">Contact us for a quote, delivery, help or anything.</p>
          </div>
                
         <div className="pl-5 mb-4 row">
         
         <div className="w-30 col-md-6 ">
          <div>
            <h5>America</h5>
            <p>
            195 E Parker Square Dr, Parker, CO 801
            +43 982-314-0958 </p>
            </div>
            <div>
            <h5>France</h5>
            <p>  109 Avenue Léon, 63 Clermont-Ferrand  +12 345-423-9893 </p>
            </div>

            <div>
            <h5>Rwanda</h5>
            <p>
            195 E Parker Square Dr, Parker, CO 801
            +43 982-314-0958 </p>
            </div>
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

              <button className ="ml-5 font-weight-bold">SEND MESSAGE</button>
            </form></div>
</div>
        

        <Mapping />
      </div>);
  }
}
export default Contact;