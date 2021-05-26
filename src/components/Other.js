import React from 'react'
import v1 from '../images/v1.png';
import v2 from '../images/v2.png';
import v3 from '../images/v3.png';
const Other = () => {
  return (
    <div className="col-12 w-100 d-flex">
      <div className="float-left">
      <img src={v1} alt="header" className="img-fluid" /> 
      </div>
      <div className="float-right d-flex flex-column ml-auto">
        <img src={v2} alt="header" className="img-fluid  w-75" /> 
        <img src={v3} alt="header" className="img-fluid mt-5 w-75"/>
      </div>
    </div>
  )
}

export default Other
