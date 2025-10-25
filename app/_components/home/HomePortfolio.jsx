"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { projects } from "@/app/_lib/db";
import ProjectCard from "../projects/ProjectCard";
import Underline from "../ui/Underline";

function HomePortfolio() {
  return (
    <section className="mt-30 sm:mt-20 px-5 md:px-10">
      <div className="flex items-center gap-4 justify-center mb-5">
        <div className="flex gap-2 text-4xl md:text-5xl font-bold ">
          My <Underline>Portfolio</Underline>
        </div>
        <Image
          src="/images/doodles/doodle6.png"
          alt="doodle"
          width="100"
          height="100"
        />
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
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
          <SwiperSlide key={index}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HomePortfolio;
