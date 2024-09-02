import React from 'react'
import { whyChooseUs } from '../../constants'
import Carousel from './Carousel'

const Home = () => {
  return (
    <div className='m-12'>
      <div>
        <h3 className='text-3xl font-bold text-primary'>Welcome to Dhanalakshmi Water Supplies !</h3>
        <p className='pt-4 pb-16 leading-loose'>Dhanalakshmi Water Supplies has been a trusted provider of high-quality water solutions in the areas in and around ECR and OMR. Established in 1992, we have built a reputation for delivering reliable and efficient water supply services through our fleet of tanker lorries. Whether for construction sites, hotels, residential areas, or other commercial needs, we are committed to meeting your water supply demands with the utmost professionalism and care.</p>
        <Carousel/>
      </div>
      <div>
        <h3 className='text-3xl font-bold text-primary pt-16'>Why Choose Us ?</h3>
        <ul className='py-4'>
          {whyChooseUs.map((item , index) => (
            <li key={index} className='py-2 leading-loose'><span><i className="fa-solid fa-droplet text-primary text-xs pr-2"></i></span> {item.point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home