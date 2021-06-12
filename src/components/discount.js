import React, {
    Component
} from 'react';
import '../styles/discount.css'
import discImg from '../images/discImg.png'
// import Discphoto from '../images/discountImg.png'
class Discount extends Component {

    render() {
        return (
            <>
            <div className = "disc h-10 w-100 h-100 mb-5 mt-4  d-flex flex-row">
            <div className = "text-white col-8 ml-lg-5 mt-xl-5"> 
             <h1 className = "text-white font-weight-bold " > GET UP TO 50 % OFF</h1>
             <button className="sh text-white ml-sm-5 mt-4 p-2 ">SHOP NOW</button>
            </div> 
           
           <div className="col-4 mr-5">
            <img src = {discImg} id = "img" style ={{transform: "rotate(6deg)"}}  
            alt = "headerPhoto" height = "250" width = "300" />
           </div>

            </div>


            </>
        );
    }

}
export default Discount;