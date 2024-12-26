'use client';
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

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
import 'swiper/css/scrollbar';
import Image from "next/image";

const TopSlider = () => {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Image className="slide"  src={slidephoto1} alt="slide1"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image className="slide"  src={slidephoto2} alt="slide2"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image className="slide"  src={slidephoto3} alt="slide3"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image className="slide"  src={slidephoto4} alt="slide4"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image className="slide"  src={slidephoto5} alt="slide5"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image className="slide"  src={slidephoto6} alt="slide6"/>
        </SwiperSlide>
      </Swiper>
  )
}

export default TopSlider