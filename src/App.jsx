import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Routes , Route } from 'react-router-dom'
import Home from './Components/Home'
import Services from './Components/Services'
import AboutUs from './Components/AboutUs'
import CopyRights from './Components/CopyRights'
import Quote from './Components/Quote'

const App = () => {
  return (
    <div className='bg-background'>
      <Navbar/>
      <div>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
         </Routes>
    </div>
    <Quote/>
    <Footer/>
    <CopyRights/>
    </div>
  )
}

export default App