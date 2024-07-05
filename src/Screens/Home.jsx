import React from "react";
import Caro from "../Components/Carosal";
import MultiCoro from "../Components/Multi-Carosal";
import Achive from "../Components/Achivements";
import Locations from "../Components/Locations";
import About from "../Components/About";
import Reviews from "../Components/Reviews";
import Banner from "../Components/Banner";
import { Button } from "@mui/material";

function Home() {
  return (
    <div>
      <div className="md:h-screen h-fit w-screen">
        <Caro />
      </div>
      <div className="h-fit w-full p-4 md:p-10 bg-gray-50 flex align-middle justify-center items-center">
        <div>
          <div className="justify-center flex bg-gray-50">
            <MultiCoro />
          </div>
        </div>
      </div>
      <div className="h-fit w-full bg-gray-50 flex align-middle justify-center items-center">
        <div>
          <div className="justify-center flex bg-gray-50">
            <Achive />
          </div>
        </div>
      </div>
      <div className="h-fit w-full pb-10 md:pb-20 bg-gray-50 flex align-middle justify-center items-center">
        <div className="h-full bg-gray-50 w-11/12">
          <div className="justify-center flex">
            <Locations />
          </div>
        </div>
      </div>
      <div className="h-fit w-full bg-green-50 p-4 md:p-10 flex align-middle justify-center items-center">
        <div className="h-full bg-gray-50 w-11/12">
          <div className="justify-center flex">
            <About />
          </div>
        </div>
      </div>
      <div className="h-fit w-full bg-green-50 p-4 md:p-10 flex align-middle justify-center items-center">
        <div className="h-full bg-gray-50 w-11/12">
          <div className="justify-center flex">
            <Reviews />
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-green-50 pt-4 md:pt-10 flex align-middle justify-center items-center">
        <div className="h-full bg-gray-50 w-full">
          <div className="justify-center flex">
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
