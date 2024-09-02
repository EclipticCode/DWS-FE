import React from "react";
import handshake from "../assets/handshake-solid.svg";
import { servicesFirst, servicesSecond } from "../../constants";

const Services = () => {
  return (
    <div className="m-12">
      <div className="grid justify-items-center">
        <div className="">
          <h1 className="text-3xl font-bold text-primary underline underline-offset-8 pb-4">
            To Whom We Offer
          </h1>
          {servicesFirst.map((point, index) => (
            <div key={index} className="py-4">
              <h3 className="text-xl font-semibold text-primary pb-2">
                <span>
                  <i className="fa-solid fa-droplet text-primary"></i>
                </span>{" "}
                {point.heading}
              </h3>
              <p className="leading-loose">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="w-96 h-96 mt-6">
          <img className="text-gray opacity-25" src={handshake} />
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-primary underline underline-offset-8">
          We are best at
        </h3>
        <div className="my-8 mx-32 grid justify-center">
          {servicesSecond.map((item, index) => (
            <div className="grid justify-items-strech my-8" key={index}>
              <div className="max-w-xl self-start border-2 border-primary p-4 rounded-md font-semibold text-secondary">
                <span>
                <i className="fa-solid fa-star text-yellow-300"></i>
                </span> {item.point}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
