import React from "react";
import About from "../assets/About Me.png";

const AboutPage = () => {
  return (
    <div className="body mt-4 gap-32 md:flex">
      <div>
        <img className="" src={About} alt="...." />
      </div>
      <div className="m-auto home1">
        <p className="font-semibold text-xl">About</p>
        <h2 className=" text-2xl font-semibold md:text-6xl font-bold">
          About Me
        </h2>
        <p className=" md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          faucibus massa sollicitudin amet augue. Nibh metus a semper purus
          mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
          adipiscing velit non nulla in amet pellentesque. Sit turpis pretium
          eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
          Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
