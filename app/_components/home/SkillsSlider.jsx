"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const skills = [
  "Clean-code enthusiast",
  "Design-aware developer",
  "Component thinker",
  "Problem untangler",
  "Accessibility advocate",
  "Performance chaser",
  "Clear communicator",
  "Detail detective",
  "Refactor lover",
  "Team player",
];

function SkillsSlider() {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1.5}
      className="bg-black cursor-grab mt-20 [&_.swipper-wrapper]:!-z-10"
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
      loop
      breakpoints={{
        1280: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 4.5,
        },
        860: { slidesPerView: 4 },
        640: { slidesPerView: 3 },
        530: {
          slidesPerView: 2.5,
        },
        430: {
          slidesPerView: 2,
        },

        390: {
          slidesPerView: 1.8,
        },
      }}
    >
      {skills?.map((skill, index) => (
        <SwiperSlide
          key={index}
          className="text-white text-center font-medium text-lg py-4.5"
        >
          {skill}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SkillsSlider;
