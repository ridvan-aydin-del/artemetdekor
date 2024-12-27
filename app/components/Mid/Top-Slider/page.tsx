'use client';
import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

//CSS
import "./global.css"

//Slider Photos Import
import slidephoto1 from "../../../../images/main-slider/slider-1.jpg"
import slidephoto2 from "../../../../images/main-slider/slider-2.jpg"
import slidephoto3 from "../../../../images/main-slider/slider-3.jpg"
import slidephoto4 from "../../../../images/main-slider/slider-4.jpg"
import slidephoto5 from "../../../../images/main-slider/slider-5.jpg"
import slidephoto6 from "../../../../images/main-slider/slider-6.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

const TopSlider = () => {
  return (
    <div className="relative w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full">
            <Image 
              className="slide" 
              src={slidephoto1} 
              alt="slide1"
              priority // İlk resmin hızlı yüklenmesi için
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image 
              className="slide" 
              src={slidephoto2} 
              alt="slide2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image 
              className="slide" 
              src={slidephoto3} 
              alt="slide3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image 
              className="slide" 
              src={slidephoto4} 
              alt="slide4"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image 
              className="slide" 
              src={slidephoto5} 
              alt="slide5"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image 
              className="slide" 
              src={slidephoto6} 
              alt="slide6"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TopSlider