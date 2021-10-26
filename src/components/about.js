import React, { Component } from "react";
import "../styles/about.css";
import photob from "../images/boyAbout.png";
import photo from "../images/photo.png";


class About extends Component {
  render() {
    return (
      <>
        <div className="container pt-8">
          <div className="mt-16">
            <h4 className=" font-bold m-5 text-center text-3xl">About us</h4>
          </div>

          <div className="grid grid-rows-2 gap-5 grid-flow-col  md:col-auto sm:col-auto">
         
              <div >
                <h3 className="text-center font-weight-bold ml-1 mr-3 mb-2">
                  Who We Are ?
                </h3>
                <p className="ml-32 text-justify width  ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of paul set sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
 
              {/* <div className="items-center justify-center">
                
              </div> */}

<div class='flex items-center justify-center'>
  <img src={photo} alt="big" height="200" width="400" />
 
</div>
           
            
              <div className="mx-5">
                <img src={photo} alt="bigp" height="350" width="400"  className="ml-5"/>
              </div>
              <div className="h-50  ">
                <h3 className="text-center font-weight-bold ml-0 mr-3 mb-2 ">
                  Why to Choose Us ?
                </h3>
                <p className=" ml-5 text-justify width  ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose.
                </p>
              </div>
            
          </div>

          <div >
            <h1 className="mt-8 ml-8 mb-5 font-bold underline text-2xl">Our values</h1>

<div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-4 ml-5 mr-1">


                  <div>
                    <h6 class="ml-12">Transparency</h6>
                  <p className="w-60 text-justify "> Consectetur adipiscing elit, sued do eiusmod tempor
                  ididunt udfgt labore et dolore magna aliqua. Quis 
                  ipsum suspendisces gravida.</p>
                  </div>

                  <div>
                  <h6 class="ml-12">Flexibility</h6>
                  <p className="w-60 text-justify ">
                    Consectetur adipiscing elit, sued do eiusmod tempor
                  ididunt udfgt labore et dolore magna aliqua. Quis 
                  ipsum suspendisces gravida.
                  </p>
                  </div>

                  <div>
                  <h6 class="ml-12">Accuracy</h6>
                  <p className="w-60 text-justify ">
                    Consectetur adipiscing elit, sued do eiusmod tempor
                  ididunt udfgt labore et dolore magna aliqua. Quis 
                  ipsum suspendisces gravida.
                  </p>
                  </div>

                  <div>
                  <h6 class="ml-12">Quality</h6>
                  <p className="w-60 text-justify ">
                    Consectetur adipiscing elit, sued do eiusmod tempor
                  ididunt udfgt labore et dolore magna aliqua. Quis 
                  ipsum suspendisces gravida.
                  </p>
                  </div>

</div>

              </div>
              <div>  <img src={photob} alt="boyp"/></div>


            </div>
          </div>
        </div>
      </>
    );
  }
}
export default About;
