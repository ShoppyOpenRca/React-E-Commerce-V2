import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <header className="bg-white shadow">
        <div
          id="myCarousel container"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner pr-16 py-4 flex flex-col md:flex-row">
            <div className="carousel-item active">
              <div className=" col-md-4 col-sm-12 col-lg-4 col-xm-12 float-right">
                <div className="card h-auto py-8 shadow-sm bg-white mb-2">
                  <img
                    className="object-cover h-80 mx-auto"
                    src="/img/slide1.png"
                    alt=""
                  />
                  <div className="card-body">
                    <h5>Leather Lewks</h5>
                    <p>
                      it’s a simple leather moto jacket or a boldstatement
                      leather look, consider leather jackets a go-to for all
                      seasons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-4 col-sm-12 col-lg-4 col-xm-12 float-right">
                <div className="card h-auto py-8 shadow-sm bg-white mb-2">
                  <img
                    className="object-cover h-80 mx-auto"
                    src="/img/slide2.png"
                    alt=""
                  />
                  <div className="card-body">
                    <h5>Leather Lewks</h5>
                    <p>
                      it’s a simple leather moto jacket or a boldstatement
                      leather look, consider leather jackets a go-to for all
                      seasons.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#myCarousel"
              data-slide="prev"
            >
              <i className="fal -mb-80 text-black fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              <i className="fal -mb-80 pt-4 -mr-24 text-black fa-angle-right"></i>
            </a>
            <div className="flex md:pl-40 py-24 md:py-40 flex-col">
              <div>
                <h2 className="font-bold text-4xl">
                  Venetian Easy Fit
                  <br /> Lamp Shade.
                </h2>
              </div>
              <div className="md:ml-8">
                <button className="block w-40 text-sm font-medium leading-5 py-2 px-2 rounded-full">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
