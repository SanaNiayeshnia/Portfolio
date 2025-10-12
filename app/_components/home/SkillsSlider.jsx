"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function SkillsSlider() {
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
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={5}
      className="bg-black !-z-10 [&_.swipper-wrapper]:!-z-10"
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop
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
