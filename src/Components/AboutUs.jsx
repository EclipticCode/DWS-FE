import React from 'react'
import CEO from '../assets/CEO-pic.jpg'

const AboutUs = () => {
  return (
    <div className='m-12'>
      <div><h3 className='text-3xl font-bold text-primary underline underline-offset-8 pb-4'>Our Story</h3></div>
      <div className='flex justify-between'>
        <div className='max-w-5xl'>
          <div className='leading-loose'>
          <div className='pt-4'>At Dhanalakshmi Water Supplies, we specialize in delivering reliable and efficient water supply solutions via tanker lorries. Established in <span className='font-bold'>1992</span> by <span className='font-bold'>Bharathi Swaminathan</span>, our company has been dedicated to ensuring that construction sites, hotels, residential areas, and more receive high-quality water across the areas in and around ECR and OMR.</div>

<div className='pt-4'>Our journey began with a simple vision: to enhance water supply services in our community. From humble beginnings, Dhanalakshmi Water Supplies has grown into a trusted name in the industry, known for our unwavering commitment to customer satisfaction and operational excellence. Over the years, we have expanded our services to meet the diverse needs of our clients, ensuring timely delivery and maintaining the highest standards of quality.</div>

<div className='pt-4'>We take pride in our ability to adapt to the evolving needs of our customers, offering flexible and dependable services that cater to a wide range of requirements. Whether it's providing large volumes of water for construction projects or ensuring a steady supply for residential complexes, our team is always ready to deliver with precision and care.</div>
          </div>
        </div>
        <div className='max-w-xl pt-4'>
          <img className="rounded-md w-64 h-84 border-2 border-primary" src={CEO} alt="CEO-image" />
          <p className='pt-2 text-xs font-semibold text-gray'>Bharathi Swaminathan</p>
        </div>
      </div>
      <div className='mt-16'>
        <h3 className='text-3xl font-bold text-primary underline underline-offset-8 pb-4'>Our Approach</h3>
        <div className='pt-4 font-semibold text-gray leading-loose'>At Dhanalakshmi Water Supplies, we believe in building lasting relationships with our clients, rooted in trust, reliability, and a shared commitment to excellence. As we continue to grow and serve the community, our mission remains clear: to be the go-to provider for all water supply needs, ensuring that every drop we deliver contributes to the success and well-being of those we serve.</div>
      </div>
      <div className='flex justify-center mt-16'>
        <div><p className='text-2xl font-bold text-primary'>மழை நீரை சேமிப்பீர் <span><i className="fa-solid fa-hand-holding-droplet text-primary"></i></span> </p></div>
      </div>
    </div>
  )
}

export default AboutUs