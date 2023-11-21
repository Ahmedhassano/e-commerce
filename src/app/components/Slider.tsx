"use client"
import React, { ReactPropTypes } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function Slider({children}:{children:React.ReactNode}) {
  return (
   <>
      <Swiper
       className="mySwiper "
       spaceBetween={20}
       slidesPerView={5}
      >
        {React.Children.map(children,(child:React.ReactNode)=> <SwiperSlide>{React.cloneElement(child)}</SwiperSlide> )}      
      </Swiper>
   </>
  )
}
