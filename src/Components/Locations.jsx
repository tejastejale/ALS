import axios from "axios";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { baseurl } from "../Helper";

function Locations() {

  const [data, setData] = React.useState([]);
  function getLocation() {
    axios
      .get(baseurl + "/property/locations/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    getLocation();
  }, []);
  return (
    <div className="h-full w-full font-Poppins">
      <div>
        <div className="flex flex-col h-full w-full items-center">
          <p className="text-4xl font-semibold h-full w-full text-center py-10">
            Find by Location
          </p>
          <div className="flex flex-wrap h-full w-full justify-evenly items-center align-middle gap-y-10">
            {
              data?.map((item, index) => (
                <div onClick={()=>{
                  window.location.href = "#/property-location/"+item.name
                }} className=" w-[300px] flex justify-between items-center h-full border-[1px] border-green-400 bg-white hover:bg-green-400 hover:text-white p-4 rounded-lg transition ease-in-out">
                  <p className="text-xl font-semibold">{item?.name}</p>
                  <p>
                    <FaArrowCircleRight className="text-2xl" />
                  </p>
                </div>
              ))
            }


          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
