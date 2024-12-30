"use client"

import React from 'react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slidePhoto1 from "@images/main-slider/slider-1.jpg";
import slidePhoto2 from "@images/main-slider/slider-2.jpg";
import slidePhoto3 from "@images/main-slider/slider-3.jpg";
import slidePhoto4 from "@images/main-slider/slider-4.jpg";
import slidePhoto5 from "@images/main-slider/slider-5.jpg";
import slidePhoto6 from "@images/main-slider/slider-6.jpg";
import "./styles.css";

const Slider = () => {


  const slidePhotos = [
    { src: slidePhoto1, alt: "Slide 1" },
    { src: slidePhoto2, alt: "Slide 2" },
    { src: slidePhoto3, alt: "Slide 3" },
    { src: slidePhoto4, alt: "Slide 4" },
    { src: slidePhoto5, alt: "Slide 5" },
    { src: slidePhoto6, alt: "Slide 6" },
  ];

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
        {slidePhotos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full">
              <Image
                className="slide"
                src={photo.src}
                alt={photo.alt}
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
