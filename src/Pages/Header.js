import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div id="myCarousel container" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner mr-3 py-4">
                        <div class="carousel-item active">
                            <div className="col-md-4 col-sm-12 col-lg-4 col-xm-12 mr-3 float-right">
                                <div className="card py-4 pl-4 shadow-sm bg-white mb-2">
                                    <img className="img-fluid mx-auto pl-5 py-4" width="400px" height="300px" src="/img/slide1.png" alt="" />
                                    <div className="card-body">
                                        <h5>Leather Lewks</h5>
                                        <p>it’s a simple leather moto jacket or a boldstatement leather look, consider leather jackets a go-to for all seasons.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="col-md-4 col-sm-12 col-lg-4 col-xm-12 mr-3 float-right">
                                <div className="card py-4 pl-4 shadow-sm bg-white mb-2">
                                    <img className="img-fluid mx-auto pl-4 py-5" width="400px" height="300px" src="/img/slide2.png" alt="" />
                                    <div className="card-body">
                                        <h5>Leather Lewks</h5>
                                        <p>it’s a simple leather moto jacket or a boldstatement leather look, consider leather jackets a go-to for all seasons.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                            <i className="fal text-black fa-angle-left"></i>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                            <i class="fal text-black fa-angle-right"></i>
                        </a>
                    {/* </div> */}
                    <div className="shop">
                        <div className="row shop">
                            <div className="mt-4 col-md-8">
                                <h6 className="font-weight-bold">Venetian Easy Fit<br /> Lamp Shade.</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div class="my-4 justify-content-center">
                                    <button class="all text-white">Shop now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;
