"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { projects } from "@/app/_lib/db";
import ProjectCard from "../projects/ProjectCard";

function HomePortfolio() {
  return (
    <section className="mt-10 px-10">
      <div className="flex items-center gap-4 justify-center mb-10">
        <div className="flex gap-2 text-5xl font-bold ">
          My{" "}
          <p className="flex flex-col">
            <span>Portfolio</span>
            <span className="relative w-full h-2">
              <Image src="/images/doodles/doodle17.png" alt="doodle" fill />
            </span>
          </p>
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
        slidesPerView={3}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        loop
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
