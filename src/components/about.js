import React, { Component } from 'react';
import '../styles/about.css';
import aboutBackground from '../images/Rectangle104.png'
import aboutside from '../images/girlAbout.png'


class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <img src={aboutBackground} alt="headerPhoto" />
                </div>
                <div className="row">
                <h4 className="mt-5 mb-3 line"> Our story</h4>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                        paul set sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        <p className="mt-3">
                            It is a long established fact that a reader will be distracted by the readable content of
                            a page when looking at its layout. The point of using Lorem Ipsum is that it has
                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                            content here', making it look like readable English. Many desktop publishing packages and
                            web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                            ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                            over the years, sometimes by accident, sometimes on purpose.
                            </p>
                    </div>
                    <div className="col-md-6">
                        <img src={aboutside} alt="headerPhoto" height="350" className="img-fluid" />
                    </div>
                </div>



                <h4 className="mb-3 line">Our mission</h4>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of
                    a page when looking at its layout. The point of using Lorem Ipsum is that it has
                    a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English.
                    </p>

                <h4 className="mb-3 line">Our vision</h4>
                <p>

                    The point of using Lorem Ipsum is that it has
                    a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. Many desktop publishing packages and
                    web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                    ipsum' will uncover many web sites still in their infancy.
                    </p>


            </div>
        );
    }
}
export default About;