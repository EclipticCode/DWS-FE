import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/Logo.png'
import axios from 'axios';
import { apiUrl } from '../../constants';


const Login = () => {

  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const apiResponse = await axios.get(`${apiUrl}/login/${username}/${password}`);
    try {
     if(apiResponse.data != "Login Failed"){
      const { username , token } = apiResponse.data;
      localStorage.setItem("login" , username);
      localStorage.setItem("token" , token)
      alert("Login Successful")
      navigate('/')
      setUsername("")
      setPassword("")
      window.location.reload()
      return;
     }
    alert("Invalid Username or Password")
    } catch(error){
      console.error("Error during login:" , error);
      alert("An error occured . Please try again.")
    }
  }

  return (
    <div>
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
            alt="Company logo"
            src={Logo}
            className="mx-auto h-28 w-auto rounded-full"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">
            Login to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-lg font-semibold leading-6 text-primary"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="email"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-semibold leading-6 text-primary"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gradient-to-br bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            New User?
            <Link
              to={`/registration`}
              className="ml-2 font-semibold leading-6 text-primary hover:text-secondary"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login