// import React from 'react'

import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row border border-gray-400">
      {/* hero left  */}
      <div className="w-full flex sm:w-1/2 items-center justify-center py-10 sm:py-0">
        <div className="text-[#424242]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#424242] uppercase"> </p>
            <p className="uppercase font-medium text-sm md:text-base">
              our bestseller
            </p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed uppercase">
            latest arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="uppercase font-medium text-sm md:text-base">
              shop now
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-[#424242] uppercase"> </p>
          </div>
        </div>{" "}
      </div>

      {/* hero right */}
      <img src={assets.hero_img}  className='w-full sm:w-1/2' alt="" />
    </section>
  );
};

export default Hero;
