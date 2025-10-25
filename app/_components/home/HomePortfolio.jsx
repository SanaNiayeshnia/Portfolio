"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { projects } from "@/app/_lib/db";
import ProjectCard from "../projects/ProjectCard";
import Underline from "../ui/Underline";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

function HomePortfolio() {
  return (
    <section className="mt-30 sm:mt-20 ">
      <div className="flex items-center gap-4 justify-center mb-5">
        <div className="flex gap-2 text-4xl md:text-5xl font-bold px-5 md:px-10">
          My <Underline>Portfolio</Underline>
        </div>
        <Image
          src="/images/doodles/doodle6.png"
          alt="doodle"
          width="100"
          height="100"
        />
      </div>

      <div className="relative px-5 md:px-10">
        <Swiper
          spaceBetween={10}
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
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-4 justify-between absolute top-1/2 z-1 right-0 left-0 px-3 md:px-8 text-3xl -translate-y-1/2 [&_button]:bg-amber-200 [&_button]:border-3 [&_button]:cursor-pointer [&_button]:rounded-full [&_button]:p-1 [&_button]:hover:bg-green-200 [&_button]:active:bg-green-200 [&_button]:transition-all [&_button]:duration-300">
          <button className="previousProject">
            <TbChevronLeft />
          </button>
          <button className="nextProject">
            <TbChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomePortfolio;
