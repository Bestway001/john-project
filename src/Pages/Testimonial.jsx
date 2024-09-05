import React from "react";
import { FaStar } from "react-icons/fa";
import yellow from "../assets/Avatar Image.png";
import blue from "../assets/Avatar Image (1).png";
import gray from "../assets/Avatar Image (2).png";
import { FiDivideCircle } from "react-icons/fi";

const Testimonial = () => {
  return (
    <div className="body home">
      <div className="mt-8">
        <p className="font-semibold text-xl">Clients Feedback</p>
        <h2 className="font-bold text-6xl">Customer testimonials</h2>
      </div>
      <div className="flex gap-6 mt-12">
        <div className="border border-green p-5">
          <div className="flex text-green gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="mt-3">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </p>
          </div>
          <div className="flex gap-3 mt-3">
            <img className="max-w-16" src={yellow} alt="...." />
            <div className="pt-4">
              <h2 className="font-semibold">Dianne Russell</h2>
              <p>Starbucks</p>
            </div>
          </div>
        </div>
        <div className="border border-green p-5">
          <div className="flex text-green gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="mt-3">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </p>
          </div>
          <div className="flex gap-3 mt-3">
            <img className="max-w-16" src={blue} alt="...." />
            <div className="pt-4">
              <h2 className="font-semibold	">Kristin Watson</h2>
              <p>Louis Vuitton</p>
            </div>
          </div>
        </div>
        <div className="border border-green p-5">
          <div className="flex text-green gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="mt-3">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </p>
          </div>
          <div className="flex gap-3 mt-3">
            <img className="max-w-16" src={gray} alt="...." />
            <div className="pt-4">
              <h2 className="font-semibold">Kathryn Murphy</h2>
              <p>McDonald's</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
