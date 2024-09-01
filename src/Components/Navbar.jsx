import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="md:block lg:flex justify-between items-center px-4 py-2 bg-navbar drop-shadow-md">
      <div>logo</div>
      <div className="flex justify-around space-x-24">
        <div className="font-semibold text-primary hover:text-secondary cursor-pointer">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="font-semibold text-primary hover:text-secondary cursor-pointer">
          <Link to={"/services"}>Services</Link>
        </div>
        <div className="font-semibold text-primary hover:text-secondary cursor-pointer">
          <Link to={"/aboutUs"}>About us</Link>
        </div>
      </div>
      <div>
        <button className="border-2 text-primary border-primary rounded-md px-3 py-1 hover:bg-primary hover:text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
