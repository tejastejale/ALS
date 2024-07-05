import { Carousel } from "flowbite-react";
import pic1 from "../images/image-14.webp";
import pic2 from "../images/image-15.webp";
import pic3 from "../images/image-16.webp";
import axios from "axios";
import { baseurl } from "../Helper";
import React from "react";
export default function Coro() {
  const [data, setData] = React.useState([]);
  function getBanners() {
    axios
      .get(baseurl + "/web/banners/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    getBanners();
  }, []);

  return (
    <div
      className="h-64 md:h-screen w-full !rounded-none"
      style={{ borderRadius: "0" }}
    >
      <Carousel
        className="!rounded-none"
        style={{ borderRadius: "0" }}
        indicators={false}
        loop={true}
      >
        {/* <img src={pic1} alt="..." />
        <img src={pic2} alt="..." />
        <img src={pic3} alt="..." /> */}

        {data.map((item, index) => {
          return (
            <div key={item?.id} className="h-full w-full">
              <img src={item?.image} alt="..." />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
