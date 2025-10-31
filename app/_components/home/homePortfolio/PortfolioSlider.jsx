"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import ProjectCard from "../../projects/ProjectCard";

export default function PortfolioSlider({ projects = [], loading = false }) {
  return (
    <div className="relative px-5 md:px-10 cursor-grab  [&_button]:bg-amber-200 [&_button]:border-3 [&_button]:cursor-pointer [&_button]:rounded-full [&_button]:p-1 [&_button]:hover:bg-green-200 [&_button]:active:bg-green-200 [&_button]:transition-all [&_button]:duration-300">
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        navigation={{ nextEl: ".nextProject", prevEl: ".previousProject" }}
        loop
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          850: { slidesPerView: 2.8 },
          768: { slidesPerView: 2.5 },
          640: {
            slidesPerView: 2,
          },
          550: {
            slidesPerView: 1.5,
          },
        }}
      >
        {projects?.map((project, index) => (
          <SwiperSlide key={index} className="max-w-100">
            <ProjectCard project={project} loading={loading} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="previousProject absolute top-1/2 z-1 left-3 md:left-8 text-3xl -translate-y-1/2">
        <TbChevronLeft />
      </button>
      <button className="nextProject absolute top-1/2 z-1 right-3 md:right-8 text-3xl -translate-y-1/2">
        <TbChevronRight />
      </button>
    </div>
  );
}
