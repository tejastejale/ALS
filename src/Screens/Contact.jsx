import React from "react";
import axios from "axios";
import { baseurl } from "../Helper";
import { useRef } from "react";
import { Bounce, ToastContainer, Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const errnotify = () => toast.error("Invalid Credentials!");
  const susnotify = () => toast.success("Info Submitted!");

  const [data, setData] = React.useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const txtarea = useRef(null);
  async function sendEnquiry(data) {
    await axios
      .post(baseurl + "/web/contact-form/", data)
      .then((res) => {
        console.log(res.data);
        txtarea.current.value = "";
        susnotify();
        Array.from(document.querySelectorAll("input", "textarea")).forEach(
          (input) => (input.value = ""),
          (textarea) => (textarea.value = "")
        );
      })
      .catch((err) => {
        errnotify();
        console.log(err);
      });
  }
  return (
    <div className="h-full w-full flex flex-col justify-center font-Poppins items-center ">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
      {/* Same as */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
      <div className="h-[200px] w-full bg-orange-500 text-white px-10 text-4xl font-black tracking-wide flex items-center">
        Contact Us
      </div>
      <div className="sm:w-[88%] flex justify-evenly my-10 sm:flex-row flex-col items-start">
        <div className="sm:w-[50%] w-[100%]">
          <div className="flex flex-col justify-between items-center h-full space-y-5 py-8">
            <input
              placeholder="Your Name"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              className="font-semibold bg-gray-100 border-none rounded-md    focus:ring-orange-500 w-[88%] px-6 py-4 text-lg"
            />
            <input
              placeholder="Your Phone"
              type="tel"
              onChange={(e) => {
                setData({ ...data, number: e.target.value });
              }}
              className="font-semibold bg-gray-100   w-[88%] px-6 border-none focus:ring-orange-500 rounded-md  py-4 text-lg"
            />
            <input
              placeholder="Your Email"
              type="email"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              className="font-semibold bg-gray-100 w-[88%] px-6 border-none focus:ring-orange-500 rounded-md  py-4 text-lg"
            />
            <textarea
              ref={txtarea}
              placeholder="Your Message"
              onChange={(e) => {
                setData({ ...data, message: e.target.value });
              }}
              className="font-semibold bg-gray-100 w-[88%] px-6 border-none focus:ring-orange-500 rounded-md  py-4 text-lg"
            />
            <button
              onClick={() => {
                console.log(data);
                if (data.name && data.number && data.email) {
                  sendEnquiry(data);
                }
              }}
              className="bg-orange-500 w-[88%] py-4 mb-5 font-semibold text-xl text-white"
            >
              Send Enquiry
            </button>
          </div>
        </div>
        <div className="sm:w-[30%] w-[88%] self-center space-y-3 ">
          <h3 className="text-3xl font-black">Get In Touch</h3>
          <p className=" text-base">
            Drop your requirments we will get back to you as soon as possible.
          </p>
          <h3 className="text-xl font-black">Reach Us</h3>
          <p className=" text-base">
            Flat no. 11 Shivangi Appartment Dallubhai Patel colony Untawadi
            Nashik 422009
          </p>
          <h3 className="text-xl font-black">Drop a Mail</h3>
          <p className=" text-base">
            <a href="mailto:info@makemyproperties.co.in">
              info@makemyproperties.co.in
            </a>
          </p>
          <h3 className="text-xl font-black">Call Us</h3>
          <p className=" text-base">
            <a href="tel:+919029263511"> +91 9029263511 </a>
          </p>
        </div>
      </div>
    </div>
  );
}
