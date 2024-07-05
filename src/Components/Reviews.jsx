import React from "react";
import "youtube-video-js";
import axios from "axios";
import { baseurl } from "../Helper";

function Reviews() {
  const [data, setData] = React.useState([]);
  function getReviews() {
    axios
      .get(baseurl + "/web/customer-reviews/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    getReviews();
  }, []);
  return (
    <div className="h-full md:w-full bg-orange-50 p-0 w-screen">
      <p className="text-center font-semibold text-3xl md:text-4xl py-5 md:py-10">
        Good Reviews By Customers
      </p>
      <div className="flex flex-wrap md:gap-5 gap-10 md:px-0 justify-center">
        <div className=" rounded-md bg-white flex justify-center">
          <youtube-video
            src="https://www.youtube.com/watch?v=Wn9twYUXw6w"
            controls
            width="100%"
            height="auto"
            className="max-w-[380px] max-h-[240px]"
          />
        </div>
        <div className="rounded-md bg-white flex justify-center">
          <youtube-video
            src="https://www.youtube.com/watch?v=Wn9twYUXw6w"
            controls
            width="100%"
            height="auto"
            className="max-w-[380px] max-h-[240px]"
          />
        </div>
        <div className="rounded-md bg-white flex justify-center">
          <youtube-video
            src="https://www.youtube.com/watch?v=Wn9twYUXw6w"
            controls
            width="100%"
            height="auto"
            className="max-w-[380px] max-h-[240px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
