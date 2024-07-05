import React from "react";

export default function About() {
  return (
    <div className="h-full w-full flex flex-col justify-center font-Poppins items-center bg-slate-50">
      <div className="h-[200px] w-full bg-orange-500 text-white px-10 text-4xl font-black tracking-wide flex items-center">
        About Us
      </div>
      <div className="sm:w-[78%] w-[92%] bg-white rounded-md my-20 shadow-lg  ">
        <div className="flex flex-col justify-evenly items-start h-full p-5">
          <p className="text-base text-gray-700 text-justify">
            Welcome to MakeMyProperty, your trusted partner in the realm of real
            estate. At MakeMyProperty, we believe that finding the perfect home
            is more than a transaction, it's about creating a seamless and
            memorable experience. Our dedicated team of experts is committed to
            guiding you through every step of your property journey, making your
            dreams a reality. <br />
            <br />
            At the core of MakeMyProperty's mission is the unwavering commitment
            to helping you find not just a house, but a place you can truly call
            home. We strive to exceed your expectations by delivering
            personalized service, valuable insights, and a diverse range of
            property options tailored to your unique preferences and needs.
            <br />
            <br />
            MakeMyProperty is more than a real estate agency; we are a community
            of passionate professionals united by a common goal – to simplify
            and enrich the process of buying and selling properties. Our team
            brings together expertise in real estate, market trends, and client
            service to provide you with a comprehensive and unparalleled
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}
