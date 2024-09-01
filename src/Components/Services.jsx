import React from "react";
import handshake from "../assets/handshake-solid.svg";
import { servicesFirst } from "../../constants";

const Services = () => {
  return (
    <div className="m-12">
      <div className="grid justify-items-center">
        <div className="">
          <h1 className="text-3xl font-bold text-primary underline underline-offset-8 pb-4">To Whom We Offer</h1>
          {servicesFirst.map((point, index) => (
            <div key={index} className="py-4">
              <h3 className="text-xl font-semibold text-primary pb-2"><span><i className="fa-solid fa-droplet text-primary"></i></span>  {point.heading}</h3>
              <p className="">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="w-96 h-96 mt-6">
          <img className="text-gray opacity-25" src={handshake} />
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-primary underline underline-offset-8">We are best at</h3>
        <div className="my-8 mx-32" >
        <div className="flex justify-between">
          <div className="max-w-xl self-start border-2 border-primary p-4 rounded-md  font-semibold text-primary">
            <span><i className="fa-solid fa-star text-yellow-400"></i></span> Reliable water supply, delivered right to your construction site
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-xl self-end border-2 border-primary p-4 rounded-md  font-semibold text-primary">
          <span><i className="fa-solid fa-star text-yellow-400"></i></span> Dedicated to supplying high-quality water for industrial purposes
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-xl self-start border-2 border-primary p-4 rounded-md  font-semibold text-primary">
          <span><i className="fa-solid fa-star text-yellow-400"></i></span> Your trusted partner in bulk water delivery for events 
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-xl self-end border-2 border-primary p-4 rounded-md  font-semibold text-primary">
          <span><i className="fa-solid fa-star text-yellow-400"></i></span> Providing clean and fresh water for all kind of Residential purposes
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-xl self-start border-2 border-primary p-4 rounded-md  font-semibold text-primary">
          <span><i className="fa-solid fa-star text-yellow-400"></i></span> Meeting emergency water supply demands with prompt service
          </div>
        </div>
        <div className="flex justify-end pb-16">
          <div className="max-w-xl self-end border-2 border-primary p-4 rounded-md  font-semibold text-primary">
          <span><i className="fa-solid fa-star text-yellow-400"></i></span> Sustaining business with consistent and dependable water supply
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
