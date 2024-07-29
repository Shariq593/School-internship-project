import React from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 
import './../../node_modules/swiper/swiper-bundle.min.css'; // Adjust import based on Swiper version

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Navigation, Pagination]}
      className="w-full h-96 md:h-[40rem]"
    >
      <SwiperSlide>
        <div className="relative w-full h-full shadow-lg">
          <img
            src="src\assets\Carousel\annual.jpg" 
            alt="First slide"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Annual Sports Day</h3>
              <p>Celebrating Excellence in Sports</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="src\assets\Carousel\Exhibition-1.png" 
            alt="Second slide"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Science Exhibition</h3>
              <p>Showcasing Student Innovations</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="src\assets\Carousel\cultural.jpeg" 
            alt="Third slide"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Cultural Fest</h3>
              <p>Embracing Diversity and Creativity</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
