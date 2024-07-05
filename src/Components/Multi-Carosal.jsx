import { Carousel } from "flowbite-react";
import axios from "axios";
import React from "react";
import { baseurl } from "../Helper";
import { useNavigate } from "react-router-dom";
import bg from "../images/bg.png";

export default function MultiCoro() {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [data2, setData2] = React.useState([]);

  function getProperties() {
    axios
      .get(baseurl + "/property/featured/")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getProperty() {
    axios
      .get(baseurl + "/property/")
      .then((res) => {
        setData2(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    getProperties();
    getProperty();
  }, []);

  const PropertyCard = ({ src, title, location, onPress, available_type }) => (
    <div
      onClick={onPress}
      className="bg-white shadow-lg rounded-lg cursor-pointer overflow-hidden"
    >
      <img src={src} alt={title} className="w-[500px] bg-cover h-[200px] " />
      <div className="p-2 md:p-4">
        <h3 className="text-md md:text-lg font-bold">{title}</h3>
        <div className="flex space-x-1 md:space-x-2 mt-2">
          {available_type?.map((item, index) => (
            <span className="bg-gray-50 text-gray-800 text-base font-bold px-2 py-1 rounded">
              {item?.type?.type}
            </span>
          ))}
        </div>
        <p className="mt-2 text-xs md:text-sm text-gray-600">{location}</p>
        <button className="mt-2 md:mt-4 bg-orange-400 text-white px-2 md:px-4 py-1 md:py-2 rounded">
          View
        </button>
      </div>
    </div>
  );
  return (
    <div
      className="flex flex-col bg-gray-50"
      style={{ backgroundImage: `url(${bg})`, background: "cover" }}
    >
      <div className="w-screen flex flex-col justify-between items-center align-middle px-2 md:px-5">
        <div className="text-center mb-4">
          <p className="text-2xl md:text-4xl font-semibold">
            Featured Properties
          </p>
        </div>
        <Carousel
          slide={true}
          loop={true}
          indicators={false}
          hover
          className="w-full md:hidden h-[400px] md:h-[500px] px-4 md:px-20"
          prevButtonClassName="bg-blue-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
          nextButtonClassName="bg-blue-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
        >
          {/* Mobile view: One card per slide */}
          {data2?.map((item, index) => (
            <div className="p-2 md:hidden">
              <PropertyCard
                onPress={() => {
                  navigate(`/property/${item?.name}`, {
                    state: { item: item },
                  });
                }}
                available_type={item?.available_type}
                src={baseurl + item?.property_images[0].image}
                title={item?.name}
                location={item?.address}
              />
            </div>
          ))}
        </Carousel>
        <div className="md:contents hidden ">
          <Carousel
            slide={true}
            loop={true}
            indicators={false}
            hover
            className="w-full h-[300px] md:h-[500px] px-4 md:px-20"
            prevButtonClassName="bg-blue-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
            nextButtonClassName="bg-blue-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
          >
            {/* Desktop view: Three cards per slide */}
            {data?.map((item, index) => (
              <div className="hidden md:flex p-4 gap-10">
                {item?.map((item, index) => (
                  <PropertyCard
                    onPress={() => {
                      navigate(`/property/${item?.name}`, {
                        state: { item: item },
                      });
                    }}
                    available_type={item?.available_type}
                    src={baseurl + item?.property_images[0].image}
                    title={item?.name}
                    location={item?.address}
                  />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
