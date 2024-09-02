import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between p-8 bg-tertiary'>
      <div className='max-w-xl'>
        <h3 className='font-bold text-primary'>Dhanalakshmi Water Supplies</h3>
        <p className='text-sm pt-2 leading-relaxed text-gray'>Providing reliable water supply services via tanker lorries to construction sites, hotels, residential areas, and more. Committed to quality and timely delivery, we source water from the best wells to meet your needs efficiently.</p>
      </div>
      <div className='max-w-xl text-gray'>
      <h3 className='font-bold text-primary'>Contact</h3>
        <div className='pb-4 pt-2'><span className='font-semibold pr-2'><i className="fa-solid fa-location-dot"></i></span> <span className='text-sm'>#3/183, Pandian Salai, Neelankarai, Chennai - 600115</span></div>
        <div className='pb-4'><span className='font-semibold pr-2'><i className="fa-solid fa-envelope"></i></span> <span className='text-sm'>dhanalakshmiwatersupply@gmail.com</span></div>
        <div><span className='font-semibold pr-2'><i className="fa-solid fa-phone"></i></span> <span className='text-sm'>+91 9884495821 , 9381010508</span></div>
      </div>
    </div>
  )
}

export default Footer