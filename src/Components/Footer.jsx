import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../images/logo2.png";

export function Foot() {
  return (
    <Footer container className="bg-green-50">
      <div className="w-full p-0 md:py-10">
        <div className="grid gap-10 sm:flex sm:justify-between md:grid-cols-3">
          <div className="flex justify-center sm:justify-start">
            {/* <Footer container className="bg-green-50 font-Poppins">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
>>>>>>> b9af5384fcb8180c5faeb89bd383d14bf804ae66 */}
            <Footer.Brand
              className=" h-16"
              // href="https://flowbite.com"
              src={logo}
              alt="Flowbite Logo"
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-3 md:gap-0 justify-end">
            <div>
              <Footer.Title title="Quick Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:text-green-500">
                  Home
                </Footer.Link>
                <Footer.Link href="#" className="hover:text-green-500">
                  About Us
                </Footer.Link>
                <Footer.Link href="#" className="hover:text-green-500">
                  Contact
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Category" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:text-green-500">
                  Residential
                </Footer.Link>
                <Footer.Link href="#" className="hover:text-green-500">
                  Commercial
                </Footer.Link>
                <Footer.Link href="#" className="hover:text-green-500">
                  Na Plots
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="max-w-xs">
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:text-green-500">
                  Flat no. 11 Shivangi Appartment Dallubhai Patel colony Untawadi Nashik 422009
                </Footer.Link>
                <Footer.Link href="tel:+919029263511" className="hover:text-green-500">
                  +91 9029263511
                </Footer.Link>
                <Footer.Link href="mailto:info@makemyproperties.co.in" className="hover:text-green-500">
                  info@makemyproperties.co.in
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
          <Footer.Copyright href="#" by="NerdTech" year={2021} />
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <Footer.Icon
              href="#"
              className="text-black hover:text-green-500 transition ease-in-out"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              className="text-black hover:text-green-500 transition ease-in-out"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              className="text-black hover:text-green-500 transition ease-in-out"
              icon={BsTwitter}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
