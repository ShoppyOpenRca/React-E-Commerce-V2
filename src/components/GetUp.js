import React from "react";

function GetUp() {
  return (
    <div className="flex flex-col md:flex-row bg-black">
      <div className="pt-24 md:ml-48">
        <h4 className="text-white text-4xl font-bold">GET UP TO 50% OFF</h4>
        <button className="block mt-16 ml-16 font-bold border-white bg-black w-40 text-sm py-2 px-2">
          Shop now
        </button>
      </div>
      <div className="-mt-16 md:ml-16">
        <img src="img/off.png" className="w-96 h-96 object-contain" alt="" />
      </div>
    </div>
  );
}

export default GetUp;
