import React from "react";
// import Ahuse from "../assets/Ahuse.png";
import App from "../assets/imagee.png";
import easy from "../assets/images1.png";
import { GoArrowUpRight } from "react-icons/go";

const Portfolio = () => {
  return (
    <div className="mx-6 md:body mt-8 md:mt-12 ">
      <div className="flex md:flex justify-between">
        <div className="home1">
          <p className="md:font-semibold text-xl">Recent Project</p>
          <h3 className="font-bold text-2xl md:font-bold md:text-6xl">
            My Portfolio
          </h3>
        </div>
        <div>
          <button className="bg-git text-white p-3">
            <a href="#">Vist My GitHub</a>
          </button>
        </div>
      </div>
      <div className=" md:flex md:gap-16 mt-12">
        <div className="">
          {/* <img src={Ahuse} alt="" /> */}
          <h2 className="font-bold text-3xl">Ahuse</h2>
          <p className="text-xl	">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <a
            className="font-semibold underline	decoration-hover flex mb-3"
            href="#"
          >
            View website
            <GoArrowUpRight className="text-green" />
          </a>
        </div>
        <div>
          <img src={App} alt="" />
          <h2 className="font-bold text-3xl">App Dashboard</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <a
            className="font-semibold underline	decoration-hover flex mb-3"
            href="#"
          >
            View Project
            <GoArrowUpRight className="text-green" />
          </a>
        </div>
        <div>
          <img src={easy} alt="" />
          <h2 className="font-bold text-3xl">Easy Rent</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <a
            className="font-semibold underline	decoration-hover flex mb-3"
            href="#"
          >
            View website
            <GoArrowUpRight className="text-green" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
