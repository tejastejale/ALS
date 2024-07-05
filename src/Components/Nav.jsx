import { useState, useRef, useEffect } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../images/logo2.png";
import { motion, AnimatePresence } from "framer-motion";
import { redirect } from "react-router-dom";
export function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownItemClick = async () => {
    setReloadKey((prevKey) => prevKey + 1);
  };

  return (
    <div key={reloadKey}>
      <Navbar
        fluid
        rounded
        className="shadow-md p-5 text-black top-0 sticky z-50 bg-white"
      >
        <div
          className={`flex md:flex-row ${
            isDropdownOpen ? "flex-col" : "flex-col"
          } justify-between items-center font-Poppins w-full self-center `}
        >
          <div className="flex flex-row items-end justify-between w-full">
            <Navbar.Brand href="#/" className="flex justify-start">
              <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
                <img src={logo} className="h-10" />
              </span>
            </Navbar.Brand>
            <motion.div
              onClick={handleToggle}
              ref={toggleRef}
              className="justify-end items-end flex "
            >
              <Navbar.Toggle />
            </motion.div>
          </div>
          <AnimatePresence>
            <motion.div className="md:flex md:items-end md:w-[2000px] md:flex-row align-middle md:h-fit hidden md:justify-end ">
              <Navbar.Collapse className="md:flex md:flex-row md:justify-end md:items-end md:gap-10">
                <motion.div className="md:flex md:flex-row md:justify-start md:items-end md:gap-5">
                  <Navbar.Link
                    href="#"
                    className="text-lg text-black hover:text-green-500 text-center md:w-fit w-full items-center align-middle h-full"
                  >
                    <p className="text-lg hover:text-green-500 text-black items-center align-middle h-full">
                      Home
                    </p>
                  </Navbar.Link>
                  <Navbar.Link
                    href="#/about"
                    className="text-lg text-black text-center md:w-fit w-full items-center align-middle h-full"
                  >
                    <p className="text-lg hover:text-green-500 text-black">
                      About Us
                    </p>
                  </Navbar.Link>
                  <Dropdown
                    arrowIcon={true}
                    inline={true}
                    className="text-center md:w-fit w-full items-center align-middle h-fit md:h-fit"
                    // onOpenChange={handleDropdownToggle}
                    label={
                      <p className="text-lg md:py-0 py-2 text-center w-full items-center hover:text-green-500 text-black cursor-pointer">
                        Residential
                      </p>
                    }
                  >
                    <Dropdown.Item
                      href="#/properties-list/Residential"
                      onClick={handleDropdownItemClick}
                    >
                      All Projects
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      href="#/properties-list/Residential/Ready Possession"
                      onClick={handleDropdownItemClick}
                    >
                      Ready Possession
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      href="#/properties-list/Residential/Ongoing Projects"
                      onClick={handleDropdownItemClick}
                    >
                      Ongoing Projects
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      href="#/properties-list/Residential/Upcoming Projects"
                      onClick={handleDropdownItemClick}
                    >
                      Upcoming Projects
                    </Dropdown.Item>
                  </Dropdown>
                  <Dropdown
                    arrowIcon={true}
                    inline={true}
                    className="text-center md:w-fit w-full items-center align-middle h-fit md:h-fit"
                    // onOpenChange={handleDropdownToggle}
                    label={
                      <p className="text-lg md:py-0 py-2 text-center w-full items-center hover:text-green-500 text-black cursor-pointer">
                        Commercial
                      </p>
                    }
                  >
                    <Dropdown.Item
                      href="#/properties-list/Commercial"
                      onClick={handleDropdownItemClick}
                    >
                      All Projects
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      href="#/properties-list/Commercial/Ready Possession"
                      onClick={handleDropdownItemClick}
                    >
                      Ready Possession
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      href="#/properties-list/Commercial/Ongoing Projects"
                      onClick={handleDropdownItemClick}
                    >
                      Ongoing Projects
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      href="#/properties-list/Commercial/Upcoming Projects"
                      onClick={handleDropdownItemClick}
                    >
                      Upcoming Projects
                    </Dropdown.Item>
                  </Dropdown>
                  <Dropdown
                    arrowIcon={true}
                    inline={true}
                    className="text-center md:w-fit w-full items-center align-middle h-fit md:h-fit"
                    // onOpenChange={handleDropdownToggle}
                    label={
                      <p className="text-lg md:py-0 py-2 text-center w-full items-center hover:text-green-500 text-black cursor-pointer">
                        Na Plots
                      </p>
                    }
                  >
                    <Dropdown.Item
                      href="#/properties-list/NA Plots"
                      onClick={handleDropdownItemClick}
                    >
                      All Projects
                    </Dropdown.Item>
                  </Dropdown>
                  <Navbar.Link
                    href="#/contact-us"
                    className="text-lg text-black items-center align-middle h-full"
                  >
                    <p className="text-lg hover:text-green-500 text-black text-center md:w-fit w-full items-center align-middle h-full">
                      Contact
                    </p>
                  </Navbar.Link>
                </motion.div>
              </Navbar.Collapse>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="menu"
                ref={menuRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="md:items-center md:hidden md:justify-between overflow-x-hidden"
              >
                <Navbar.Collapse className="md:flex md:items-center pr-2">
                  <Navbar.Link
                    href="#"
                    className="text-lg text-black hover:text-green-500 text-start md:w-auto w-screen items-start align-middle h-full"
                  >
                    Home
                  </Navbar.Link>
                  <Navbar.Link
                    href="#/about"
                    className="text-lg text-black text-start md:w-auto w-screen items-center align-middle h-full"
                  >
                    About Us
                  </Navbar.Link>
                  <div className="">
                    <Dropdown
                      arrowIcon={true}
                      inline={true}
                      className="text-start md:w-fit w-fit overflow-x-hidden justify-start flex items-start align-middle h-fit md:h-fit"
                      label={
                        <p className="text-lg md:py-0 py-2 text-start w-fit flex items-center px-3 hover:text-green-500 text-black cursor-pointer">
                          Residential
                        </p>
                      }
                    >
                      <Dropdown.Item
                        href="#/properties-list/Residential"
                        onClick={handleDropdownItemClick}
                      >
                        All Projects
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="#/properties-list/Residential/Ready Possession"
                        onClick={handleDropdownItemClick}
                      >
                        Ready Possession
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="#/properties-list/Residential/Ongoing Projects"
                        onClick={handleDropdownItemClick}
                      >
                        Ongoing Projects
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="#/properties-list/Residential/Upcoming Projects"
                        onClick={handleDropdownItemClick}
                      >
                        Upcoming Projects
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                  <div>
                    <Dropdown
                      arrowIcon={true}
                      inline={true}
                      className="text-start md:w-fit w-fit overflow-x-hidden justify-start flex items-start align-middle h-fit md:h-fit"
                      label={
                        <p className="text-lg md:py-0 py-2 text-start w-fit flex items-center px-3 hover:text-green-500 text-black cursor-pointer">
                          Commercial
                        </p>
                      }
                    >
                      <Dropdown.Item
                        href="#/properties-list/Commercial"
                        onClick={handleDropdownItemClick}
                      >
                        All Projects
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="#/properties-list/Commercial/Ready Possession"
                        onClick={handleDropdownItemClick}
                      >
                        Ready Possession
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="#/properties-list/Commercial/Ongoing Projects"
                        onClick={handleDropdownItemClick}
                      >
                        Ongoing Projects
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="#/properties-list/Commercial/Upcoming Projects"
                        onClick={handleDropdownItemClick}
                      >
                        Upcoming Projects
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                  <div>
                    <Dropdown
                      arrowIcon={true}
                      inline={true}
                      className="text-start md:w-auto w-fit overflow-x-hidden justify-start flex items-start align-middle h-fit md:h-fit"
                      label={
                        <p className="text-lg md:py-0 py-2 text-start w-fit items-center px-3 hover:text-green-500 text-black cursor-pointer">
                          Na Plots
                        </p>
                      }
                    >
                      <Dropdown.Item
                        href="#/properties-list/NA Plots"
                        onClick={handleDropdownItemClick}
                      >
                        All Projects
                      </Dropdown.Item>
                    </Dropdown>
                  </div>

                  <Navbar.Link
                    href="#/contact-us"
                    className="text-lg text-black items-center align-middle h-full md:w-auto w-full text-start"
                  >
                    Contact
                  </Navbar.Link>
                </Navbar.Collapse>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Navbar>
    </div>
  );
}
