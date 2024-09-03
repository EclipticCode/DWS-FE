import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo.png'

const Navbar = () => {

  const username = localStorage.getItem('login')

  const handleLogout = () => {
    localStorage.setItem('login' , "")
    localStorage.setItem('token' , "")
    window.location.reload()
    alert("Logout Successful")
  }

  return (
    <div className="md:block lg:flex justify-between items-center px-4 py-2 bg-navbar drop-shadow-md">
      <div><img src={logo} alt="" className="h-14 w-14 rounded-full" /></div>
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
      <div className="px-8">
       {username ?  <button className="border-2 text-primary border-primary rounded-md px-3 py-1 hover:bg-primary hover:text-white" onClick={() => handleLogout()}>
         Logout
        </button> :  <button className="border-2 text-primary border-primary rounded-md px-3 py-1 hover:bg-primary hover:text-white">
         <Link to={'/login'}>Login</Link>
        </button>}
      </div>
    </div>
  );
};

export default Navbar;
