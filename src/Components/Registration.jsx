import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import axios from 'axios'


const Registration = () => {

  const [email , setEmail] = useState("")
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiResponse = await axios.post('http://localhost:4000/registration' , {
      username : username , 
      password : password
    })
    if(apiResponse.data){
      alert("Registration Successful")
      setEmail("")
      setUsername("")
      setPassword("")
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
            Sign Up
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" onSubmit={handleSubmit}>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold leading-6 text-primary"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email address"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
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
                  autoComplete="username"
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
                  id="confirmPassword"
                  name="confirmPassword"
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
                className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration