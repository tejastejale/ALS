import React from "react";
import about from "../images/about.png";

function About() {
  return (
    <div className="h-full w-full bg-orange-50 p-5 md:p-10">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex flex-col gap-5 w-full md:w-full">
          <div>
            <p className="text-3xl md:text-4xl font-semibold text-center md:text-start">
              About Us
            </p>
          </div>
          {/* <div className="w-full md:hidden contents md:w-1/2">
            <img
              src={about}
              className="w-full h-auto rounded-md shadow-md"
              alt="About us"
            />
          </div> */}
          <div>
            <p className="text-justify text-base md:text-lg">
              Welcome to MakeMyProperty, your trusted partner in the realm of
              real estate. At MakeMyProperty, we believe that finding the
              perfect home is more than a transaction, it's about creating a
              seamless and memorable experience. Our dedicated team of experts
              is committed to guiding you through every step of your property
              journey, making your dreams a reality. At the core of
              MakeMyProperty's mission is the unwavering commitment to helping
              you find not just a house, but a place you can truly call home. We
              strive to exceed your expectations by delivering personalized
              service, valuable insights, and a diverse range of property
              options tailored to your unique preferences and needs.
              MakeMyProperty is more than a real estate agency; we are a
              community of passionate professionals united by a common goal – to
              simplify and enrich the process of buying and selling properties.
              Our team brings together expertise in real estate, market trends,
              and client service to provide you with a comprehensive and
              unparalleled experience.
            </p>
          </div>
        </div>
        {/* <div className="w-full md:contents hidden ">
          <img src={about} className="w-1/2" alt="About us" />
        </div> */}
      </div>
    </div>
  );
}

export default About;
