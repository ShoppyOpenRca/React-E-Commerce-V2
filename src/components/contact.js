import React, { Component } from 'react';

import {FaPhoneAlt,IoLocationOutline } from "react-icons/fa";


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
      <div class="pt-5 " >
          <div className="mb-4 mt-16" >  
            <h4 class="text-3xl my-8">Contact Us</h4>
            <p className="text-center">Contact us for a quote, delivery, help or anything.</p>
          </div>
                
         <div className="grid grid-cols-2">
         
         <div className="ml-40">
           
           <div className="mb-8">
            <h5 class="text-2xl">America</h5>
            <p>
            195 E Parker Square Dr, Parker,CO 801
             </p>
             <span className="space-x-8  ">
           <FaPhoneAlt className="-mb-8 w-6 h-8 text-gray-600"/>
           {/* <IoLocationOutline/> */}
             <p > +43 982-314-0958</p>
         </span>

         </div>
         <div className="mb-8">
            <h5 class="text-2xl">France</h5>
            <p>  109 Avenue Léon, 63 Clermont-Ferrand 
             </p>
          
            <span className="space-x-8 ">
           <FaPhoneAlt className="-mb-8 w-6 h-8 text-gray-600"/>
           {/* <IoLocationOutline/> */}
             <p >+12 345-423-9893</p>
         </span>
          
         </div>

         <div>
           
            <h5 class="text-2xl">Rwanda</h5>
            <p>
            195 E Parker Square Dr, Parker, CO 801
             </p>

            <span className="space-x-8 mt-3">
           <FaPhoneAlt className="-mb-8 w-6 h-8 text-gray-600"/>
        
             <p >+43 982-314-0958</p>
         </span>
         </div>
           
          </div>


          <div className="w-30 col-md-6 ">
            <h4> Get in touch </h4>
            <form>
              <span className="space-x-4">
              <input type="text" placeholder=" Enter your name" class="h-14 " />
              <input type="text" placeholder="Enter your Email " class="h-14 "  /> <br />
              </span>
              <input type="text" placeholder="Enter subject " className="mt-3 mb-3 h-14 w-11/12"/><br/>
              <input type="text"  name="textValue" onChange={this.handleChange}  placeholder="Enter the message" className="mb-4 w-11/12 h-24"
              /><br/>

              <button className ="ml-5 font-weight-bold">SEND MESSAGE</button>
            </form></div>
</div>
<p  >
  paragraph 1
</p>
        <Mapping />

      </div>);
  }
}
export default Contact;