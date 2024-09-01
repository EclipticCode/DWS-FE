import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Routes , Route } from 'react-router-dom'
import Home from './Components/Home'
import Services from './Components/Services'
import AboutUs from './Components/AboutUs'
import CopyRights from './Components/CopyRights'
import Quote from './Components/Quote'
import Login from './Components/Login'
import Registration from './Components/Registration'
import Available from './Components/Available'

const App = () => {
  return (
    <div className='bg-background'>
      <Navbar/>
      <Available/>
      <div>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
         </Routes>
    </div>
    <Quote/>
    <Footer/>
    <CopyRights/>
    </div>
  )
}

export default App