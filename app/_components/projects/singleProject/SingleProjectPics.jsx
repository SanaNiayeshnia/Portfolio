"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import Image from "next/image";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/zoom";

import { useState } from "react";

function SingleProjectPics({ project }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="flex-grow w-full h-[400px] flex gap-4">
      <div className="relative py-5">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={15}
          slidesPerView={5}
          modules={[Navigation, Thumbs, FreeMode]}
          direction="vertical"
          freeMode={true}
          watchSlidesProgress={true}
          loop
          navigation={{ nextEl: ".nextProject", prevEl: ".previousProject" }}
          className="h-full overflow-hidden cursor-pointer shrink-0"
        >
          {project?.images?.map((pic, index) => (
            <SwiperSlide key={index}>
              <div className="w-30 h-15 relative border-2 rounded">
                <Image
                  className="object-cover"
                  src={pic || "/images/placeholder.jpg"}
                  alt={project?.name}
                  fill
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col items-center gap-4 justify-between absolute left-1/2 z-1 bottom-0 top-0  text-xl -translate-x-1/2 [&_button]:bg-amber-200 [&_button]:border-2 [&_button]:cursor-pointer [&_button]:rounded-full [&_button]:p-0.5 [&_button]:hover:bg-green-200 [&_button]:active:bg-green-200 [&_button]:transition-all [&_button]:duration-300">
          <button className="previousProject">
            <TbChevronUp />
          </button>
          <button className="nextProject">
            <TbChevronDown className="translate-y-0.5" />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        modules={[Thumbs, FreeMode, Zoom]}
        freeMode={true}
        watchSlidesProgress={true}
        loop
        className="flex-grow h-full overflow-hidden cursor-pointer"
        thumbs={{ swiper: thumbsSwiper }}
        zoom
      >
        {project?.images?.map((pic, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative border-2 rounded bg-black swiper-zoom-container">
              <Image
                className="object-contain"
                src={pic || "/images/placeholder.jpg"}
                alt={project?.name}
                fill
                placeholder="blur"
                blurDataURL="/images/placeholder.jpg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SingleProjectPics;
