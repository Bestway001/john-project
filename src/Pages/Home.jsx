import React from "react";
import AboutPage from "./AboutPage";
import Man from "../assets/Group 11 1.png";
import phone from "../assets/phone.png";
import tag from "../assets/Branding & Logo.png";
import Testing from "../assets/UI & UX Design.png";
import webflow from "../assets/Webflow Development.png";
const Home = () => {
  return (
    <div className="">
      <div className=" body home1 md:flex bg-background">
        <div className="m-auto">
          <p className="font-semibold text-xl">Hey,i am john</p>
          <h2 className="font-bold text-2xl md:text-5xl ">
            I develop dynamic and User-Centered Web Applications
          </h2>
          <p className="font-normal text-2xl">
            My expertise spans both front-end and back-end development, enabling
            me to build comprehensive solutions that meet diverse client needs.
          </p>
          <button className="mt-6 bg-hover p-2 border-none">
            <a className="text-white" href="#">
              Get In Touch
            </a>
          </button>
        </div>
        <div>
          <img src={Man} alt="" />
        </div>
      </div>
      <div className="mt-12 home1 body">
        <p className="font-semibold text-base">My Skills</p>
        <h4 className="font-bold text-6xl">My Expertise</h4>
      </div>
      <div className=" inline m-12 gap-6 md:flex body ">
        <div className="bg-background p-5">
          <img className="w-20" src={phone} alt="...." />
          <h3 className="font-bold">Responsive Design</h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="bg-background p-5">
          <img className="w-20" src={tag} alt="...." />
          <h3 className="font-bold">Front-End Frameworks</h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="bg-background p-5">
          <img className="w-20" src={Testing} alt="...." />
          <h3 className="font-bold">Testing and Debugging</h3>
          <p className="text-xl	">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="bg-background p-5">
          <img className="w-20" src={webflow} alt="...." />
          <h3 className="font-bold">Responsive Design</h3>
          <p className="text-xl	">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
      </div>
      <AboutPage />
    </div>
  );
};

export default Home;
