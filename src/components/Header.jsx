import React from "react";
import logo from "../assets/logo.png";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-white m-2">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img src={logo} alt="...." />
        </div>
        <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ">
          <ul className="flex font-medium md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-hover" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-hover" href="./Portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="hover:text-hover" href="./AboutPage">
                About me
              </a>
            </li>
            <li>
              <a className="hover:text-hover" href="./Testimonial">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="border border-hover p-2 text-hover font-medium">
            <a href="#">Contact Us</a>
          </button>
          <IoIosMenu className="text-3xl cursor-pointer md:hidden" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
