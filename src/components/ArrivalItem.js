import React from "react";
import { baseUrl } from "../shared/baseUrl";
import { Link } from "react-router-dom";
function ArrivalItem({ arrival }) {
  return (
    <div className="flex flex-col">
      <div className="bg-white shadow-lg rounded-lg cursor-pointer transition duration-700 ease-in-out transform hover:scale-105">
        <Link to={`/arrivals/${arrival.id}`}>
          <div className="flex flex-row">
            <i className="fal fa-shopping-bag md:mt-4 mt-4 ml-48 md:ml-72"></i>
            <img src={baseUrl + arrival.image} className="object-cover" alt={arrival.title} />
          </div>
          <div className="py-4 px-8 flex flex-col items-center">
              <p className="font-bold">{arrival.title}</p>
            <div>
              <i className="fa fa-star star"></i>
              <i className="fa fa-star star"></i>
              <i className="fa fa-star star"></i>
              <i className="fa fa-star star"></i>
            </div>
            <h6 className="text-black">${arrival.price}</h6>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ArrivalItem;
