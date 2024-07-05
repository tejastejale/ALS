import React from "react";
import pic1 from "../images/image-14.webp";
import axios from "axios";
import { baseurl } from "../Helper";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Property() {
  const navigate = useNavigate();
  const state = useLocation();
  const [data, setData] = React.useState([]);
  function getProperties() {
    axios
      .get(
        state?.pathname?.split("/").length === 3
          ? baseurl + `/property/?category=${state?.pathname?.split("/")[2]}`
          : baseurl +
              `/property/?category=${
                state?.pathname?.split("/")[2]
              }&possession_type=${state?.pathname?.split("/")[3]}`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    getProperties();
  }, [state]);
  return (
    <div className="h-full w-full flex flex-col justify-center font-Poppins items-center bg-slate-50">
      <div className="h-[200px] w-full bg-green-500 text-white px-10 text-4xl font-black tracking-wide flex items-center">
        Property List
      </div>
      <div className=" flex w-full flex-wrap justify-evenly my-8">
        {data.map((item, index) => (
          <div
            onClick={() => {
              navigate(`/property/${item?.name}`, { state: { item: item } });
            }}
            className="bg-white sm:w-[380px] w-[92%] m-2 shadow-md rounded-lg cursor-pointer overflow-hidden"
          >
            <img
              src={baseurl + item?.property_images[0].image}
              alt={item?.name}
              className="md:w-[500px] md:h-[250px] md:bg-cover w-full h-[250px] bg-cover"
            />
            <div className="p-2 md:p-4">
              <h3 className="text-md md:text-lg font-bold">{item?.name}</h3>
              <div className="flex space-x-1 md:space-x-2 mt-2">
                {item?.available_type?.map((item, index) => (
                  <span className="bg-gray-50 text-gray-800 text-base font-bold px-2 py-1 rounded">
                    {item?.type?.type}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs md:text-sm text-gray-600">
                {item?.address}
              </p>
              <button className="mt-2 md:mt-4 bg-green-500 text-white px-2 md:px-4 py-1 md:py-2 rounded">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
