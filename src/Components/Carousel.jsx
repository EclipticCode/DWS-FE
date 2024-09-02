import React from "react";
import lorry1 from '../assets/lorry-1.jpg'
import lorry2 from '../assets/lorry-2.jpg'
import lorry3 from '../assets/lorry-3.jpg'
import lorry4 from '../assets/lorry-4.jpg'
import lorry5 from '../assets/lorry-5.jpg'
import lorry6 from '../assets/lorry-6.jpg'
import lorry7 from '../assets/lorry-7.jpg'
import lorry8 from '../assets/lorry-8.jpg'
import lorry9 from '../assets/lorry-9.jpg'

const Carousel = () => {
  return (
    <div>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 w-auto">
          <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src={lorry1} className="absolute block md:w-6/12 md:h-96 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md"alt="lorry-image"/>
          </div>
             <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={lorry6} className="absolute block md:w-6/12 md:h-96 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md" alt="lorry-image"/>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={lorry7} className="absolute block md:w-6/12 md:h-96 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md" alt="lorry-image"/>
          </div>
         <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={lorry8} className="absolute block md:w-6/12 md:h-96 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md" alt="lorry-image" />
          </div>
               <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={lorry2} className="absolute block md:w-6/12 md:h-96 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md" alt="lorry-image"/>
          </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full md:bg-tertiary group-hover:bg-secondary/50 group-focus:ring-2 group-focus:ring-secondary  group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full md:bg-tertiary group-hover:bg-secondary/50 group-focus:ring-2 group-focus:ring-secondary  group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
