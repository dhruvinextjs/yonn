"use client";
 
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { motion } from "framer-motion";
 
import "swiper/css";
import "swiper/css/navigation";
 
/* ================= PAGE LOAD ANIMATION ================= */
 
const fromBottom = {
  hidden: {
    opacity: 0,
    y: 120,
  },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay,
    },
  }),
};
 
/* ================= DATA ================= */
 
const screenshots = [
  "/images/screen_1.png",
  "/images/screen_2.png",
  "/images/screen_3.png",
  "/images/screen_4.png",
  "/images/screen_5.png",
  "/images/screen_6.png",
  "/images/screen_7.png",
  "/images/screen_8.png",
  "/images/screen_9.png",
  "/images/screen_10.png",
  "/images/screen_11.png",
];
 
const LINES = [
  { id: 1, index: 2 },
  { id: 2, index: 7 },
  { id: 3, index: 8 },
];
 
export default function ScreenShortSection() {
  const swiperRef = useRef(null);
  const [activeLine, setActiveLine] = useState(1);
 
  const START_INDEX = 2;
  const END_INDEX = 8;
 
  const handleNext = () => {
    if (!swiperRef.current) return;
    const current = swiperRef.current.activeIndex;
    current >= END_INDEX
      ? swiperRef.current.slideTo(START_INDEX)
      : swiperRef.current.slideNext();
  };
 
  const handlePrev = () => {
    if (!swiperRef.current) return;
    const current = swiperRef.current.activeIndex;
    current <= START_INDEX
      ? swiperRef.current.slideTo(END_INDEX)
      : swiperRef.current.slidePrev();
  };
 
  const handleLineClick = (line) => {
    if (!swiperRef.current) return;
    swiperRef.current.slideTo(LINES[line - 1].index);
    setActiveLine(line);
  };
 
  return (
    <section
      id="screenshots"
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* ================= TITLE ================= */}
      <motion.div
        variants={fromBottom}
        initial="hidden"
        animate="show"
        custom={0}
        className="text-center mb-10 md:mb-14 px-4"
      >
        <h2 className="uppercase text-lg sm:text-xl md:text-2xl font-light text-gray-700 mb-1">
          APP SCREENSHORT
        </h2>
 
        <div className="relative flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="w-10 sm:w-12 h-[1px] mt-4 bg-gray-300"></span>
            <span className="w-2.5 h-2.5 bg-[#660066] rotate-45"></span>
            <span className="w-10 sm:w-12 h-[1px] mt-4 bg-gray-300"></span>
          </div>
          <div className="relative w-6 h-3 -mt-1">
              <span className="absolute left-1/2 bottom-0 w-[1px] h-3 bg-gray-300 -rotate-45 origin-bottom"></span>
              <span className="absolute left-1/2 bottom-0 w-[1px] h-3 bg-gray-300 rotate-45 origin-bottom"></span>
            </div>
        </div>
      </motion.div>
 
      {/* ================= SWIPER ================= */}
      <motion.div
        variants={fromBottom}
        initial="hidden"
        animate="show"
        custom={0.4}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6"
      >
        <Swiper
          modules={[Navigation]}
          centeredSlides
          initialSlide={START_INDEX}
          spaceBetween={16}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            const i = swiper.activeIndex;
            if (i <= 4) setActiveLine(1);
            else if (i <= 7) setActiveLine(2);
            else setActiveLine(3);
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {screenshots.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center py-6">
              {({ isActive }) => (
                <div
                  className={`relative w-[230px] h-[460px] rounded-lg overflow-hidden shadow-xl bg-black transition-all
                    ${isActive ? "scale-105" : "scale-95"}
                  `}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
 
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20"
        >
          <SlArrowLeft className="text-3xl text-gray-400 hover:text-[#660066]" />
        </button>
 
        <button
          onClick={handleNext}
          className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20"
        >
          <SlArrowRight className="text-3xl text-gray-400 hover:text-[#660066]" />
        </button>
      </motion.div>
 
      {/* ================= BLUE LINES ================= */}
      <motion.div
        variants={fromBottom}
        initial="hidden"
        animate="show"
        custom={0.8}
        className="flex justify-center items-end gap-3 mt-14 h-12"
      >
        {LINES.map((line) => (
          <button
            key={line.id}
            onClick={() => handleLineClick(line.id)}
            className={`w-[4px] rounded-full transition-all duration-300
              ${
                activeLine === line.id
                  ? "h-[30px] bg-[#660066]"
                  : "h-[15px] bg-[#dadada]"
              }
            `}
          />
        ))}
      </motion.div>
    </section>
  );
}