import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Departs } from "../constants/Departs";
import { RxArrowTopRight } from "react-icons/rx";
import { FreeMode, Pagination } from "swiper/modules";

const Departments = () => {




  return (
    <div className="flex items-center justify-center flex-col bg-white px-10 py-10">
      {/* Heading Section */}
      <div className="pb-10 pt-10 w-full max-w-[95%] lg:max-w-[80%]">
        <h1 className="text-left  sm:text-3xl lg:text-4xl font-bold font-[Poppins] text-gray-800">
          Our Departments
        </h1>
      </div>

      {/* Swiper Component */}
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 5 },
        }}
        // freeMode={true}
        // pagination={{ clickable: true }}
        // modules={[FreeMode, Pagination]}
        className="w-full max-w-[95%] lg:max-w-[80%] relative pb-10"
      >
        {Departs.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col gap-2 group relative shadow-lg text-white rounded-xl 
              px-6 py-6 sm:py-8 h-[500px] w-[300px] overflow-hidden cursor-pointer transition-all duration-300 hover:underline"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-100"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col justify-end h-full gap-2 sm:gap-3">
                {/* {item.icon && <item.icon className="text-blue-500 group-hover:text-amber-400 w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300" />} */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[poppins] font-bold ">
                  {item.title}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg">{item.content}</p>
              </div>
              <RxArrowTopRight className="absolute bottom-1 left-4 w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-blue-500 group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
};

export default Departments;
