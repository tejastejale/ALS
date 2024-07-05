import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="bg-green-500 w-full h-full">
      <div className="py-12 bg-green-500 flex flex-wrap items-center justify-evenly w-full">
        <div className="w-8/12">
          <p className="text-4xl text-center md:text-start font-bold text-white">
            Didn't Find What You Are Looking For?
            <p className="text-xl font-normal">
              Post your requirment we will get back to you as soon possible.
            </p>
          </p>
        </div>
        <Link to={"/contact-us"}>
          <div className="p-4 px-12 md:my-4 my-5 bg-white rounded-full">
            Enquire Here
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
