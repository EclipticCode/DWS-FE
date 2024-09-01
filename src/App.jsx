import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Routes , Route } from 'react-router-dom'
import Home from './Components/Home'
import Services from './Components/Services'
import AboutUs from './Components/AboutUs'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-background'>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
         </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App