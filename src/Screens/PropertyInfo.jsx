import React from "react";
import { Carousel } from "flowbite-react";
import pic1 from "../images/image-14.webp";
import pic2 from "../images/image-15.webp";
import pic3 from "../images/image-16.webp";
import { useLocation } from 'react-router-dom';
import { baseurl } from '../Helper';
import axios from "axios";
export default function PropertyInfo() {
    const { state } = useLocation()
    const [data,setData] = React.useState({
      property:state?.item?.id,
      name:"",
      email:"",
      phone_number:"",
    })
    async function sendEnquiry(data) {
      await axios
        .post(baseurl + "/property/inquiry/",data)
        .then((res) => {
          alert("Enquiry Sent")
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return (
        <div className='h-full w-full flex flex-col justify-center font-Poppins items-center bg-slate-50'>
            <div className='sm:h-[50vh] h-[20vh] w-[92%] !rounded-none my-10'>
                <Carousel
                    className="!rounded-none"
                    style={{ borderRadius: "0" }}
                    indicators={false}
                    loop={true}
                >
                    <div className='flex w-full h-full'>
                        <img className=' object-contain w-[50%] ' src={baseurl + state?.item?.property_images[0]?.image} alt="..." />
                        <img className=' object-contain w-[50%]' src={baseurl + state?.item?.property_images[1]?.image} alt="..." />
                    </div>
                </Carousel>
            </div>
            <div className='w-[88%] flex sm:flex-row flex-col justify-evenly mb-10 items-start'>
                <div className='sm:w-[60%] space-y-8'>
                    <div className='w-full bg-white h-[180px] rounded-md'>
                        <div className="flex flex-col justify-evenly items-start h-full px-5">
                            <h3 className="text-3xl font-black">{state?.item?.name}</h3>
                            <h3 className="text-lg text-green-500 font-bold">{state?.item?.city?.name}</h3>

              <p className="mt-2 text-sm text-gray-600">
                {state?.item?.address}
              </p>
              <div className="flex space-x-2 mt-2">
                {state?.item?.available_type?.map((item, index) => (
                  <span className="bg-gray-50 text-gray-800 text-base font-bold px-2 py-1 rounded">
                    {item?.type?.type}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-md ">
            <div className="flex flex-col justify-evenly items-start h-full p-5">
              <h3 className="text-xl font-bold">Description</h3>
              <p className="text-base text-gray-700 text-justify">
                {state?.item?.description}
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-md ">
            <div className="flex flex-col justify-evenly items-start h-full p-5">
              <h3 className="text-xl font-bold">Ameneties</h3>
              <div className="flex flex-wrap justify-evenly ">
                {state?.item?.amenities?.split(",")?.map((item, index) => (
                  <span className="bg-gray-50 m-2 text-gray-800 text-base font-bold px-2 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-md ">
            <div className="flex flex-col justify-evenly items-start h-full p-5">
              <h3 className="text-xl font-bold">Property Video</h3>
              <div className=" rounded-md bg-white w-full  flex justify-center">
                <youtube-video src={state?.item?.property_video_url} controls />
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-md ">
            <div className="flex flex-col justify-evenly items-start h-full p-5">
              <h3 className="text-xl font-bold">Location</h3>
              <iframe
                src={state?.item?.google_map_link}
                className="w-full h-[300px]"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="w-full bg-white rounded-md ">
            <div className="flex flex-col justify-evenly items-start h-full p-5">
              <h3 className="text-xl font-bold">Gallery</h3>
              <div className="flex flex-wrap justify-evenly ">
                {state?.item?.property_images?.map((item, index) => (
                  <img
                    src={baseurl + item?.image}
                    className=" m-2 w-[300px] text-base font-bold px-2 py-1 rounded"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-[35%] w-[100%] sm:mt-0 mt-10">
          <div className="w-full bg-white rounded-md ">
            <div className="flex flex-col justify-between items-center h-[500px]">
              <h3 className="text-2xl font-bold bg-green-500 text-white w-full rounded-t-md py-5 px-10">
                Enquire Now
              </h3>
              <input
                placeholder="Your Name"
                type="text"
                onChange={(e)=>{
                  setData({...data, name:e.target.value})
                }}
                className="font-semibold bg-gray-100 border-none rounded-md    w-[88%] px-6 py-4 text-lg"
              />
              <input
                placeholder="Your Phone"
                type="tel"
                onChange={(e)=>{
                  setData({...data, phone_number:e.target.value})
                  }}
                className="font-semibold bg-gray-100   w-[88%] px-6 border-none rounded-md  py-4 text-lg"
              />
              <input
                placeholder="Your Email"
                type="email"
                onChange={(e)=>{
                  setData({...data, email:e.target.value})
                  }}
                className="font-semibold bg-gray-100 w-[88%] px-6 border-none rounded-md  py-4 text-lg"
              />
              <button onClick={()=>{
                console.log(data)
                if(data.name && data.phone_number && data.email){
                  sendEnquiry(data)
                }
              }} className="bg-slate-800 w-[88%] py-4 mb-5 font-semibold text-xl text-white">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
