import React, { Component } from 'react';
import '../styles/about.css';
import photo from '../images/photo.png'


class About extends Component {
    render() {
        return (
            <>
            <style>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Nunito" />
            </style>

            <div className="container">
                <div>
                  <h4 className=" font-weight-bolder m-5 text-center">About us</h4>  
                </div>
               
                <div className="row">
                    <div className="col-md-6">
                        <div className="h-50 ">
                        <h3 className="text-center font-weight-bold mx-3 mb-2">Who We Are ?</h3>
                        <p className="mx-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                        paul set sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            </div>
                            <div className="mx-5"><img src={photo} alt="big photo" height="200" width="400"/></div>
                      

                    </div>

                    <div className="mt-5 col-md-6">
                        
                    <div className="mx-5"><img src={photo} alt="big photo" height="200" width="400" className="ml-5"/></div>
                    <div className="h-50  mt-3">
                    <h3 className="text-center font-weight-bold mx-3 mb-2 ">Why to Choose Us ?</h3>
                    <p className="mx-5">
                            It is a long established fact that a reader will be distracted by the readable content of
                            a page when looking at its layout. The point of using Lorem Ipsum is that it has
                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                            content here', making it look like readable English. Many desktop publishing packages and
                            web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                            ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                            over the years, sometimes by accident, sometimes on purpose.
                            </p>   
                            </div>               
                    </div>

                </div>

<div>
<h3>Our values</h3>

<div className="row">
  <div className="col-md-4"></div>
  <div className="col-md-8"></div>
</div>

</div>
            </div>
            </>
        );
    }
}
export default About;