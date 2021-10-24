import React from "react";
import "../styles/Arrivals.css";
import "../styles/Navbar.css";
import { Loading } from "./LoadingComponent";
import ArrivalNav from "./ArrivalNav";
import ArrivalItem from "./ArrivalItem";
import Blog from "./Blog";
import GetUp from "./GetUp";

const Home = (props) => {
  const arrivalMenu = props.arrivals.arrivals.map((arrival) => {
    return (
      <ArrivalItem
        className="col-span-1 md:col-span-3"
        key={arrival.id}
        arrival={arrival}
        onClick={props.onClick}
      />
    );
  });
  if (props.arrivals.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.arrivals.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.arrivals.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="container pt-24">
        <ArrivalNav />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 md:ml-32">
          {arrivalMenu}
        </div>
        <div className="grid justify-items-stretch my-4">
          <div className="justify-self-center">
            <button className="block w-40 text-sm py-2 px-2 rounded-full">
              View all
            </button>
          </div>
        </div>
        <div className="md:ml-32">
          <GetUp />
        </div>

        <h5 className="font-bold text-4xl text-center py-4">Blog</h5>
        <div className="md:ml-32">
          <Blog />
        </div>
      </div>
    );
};

export default Home;
