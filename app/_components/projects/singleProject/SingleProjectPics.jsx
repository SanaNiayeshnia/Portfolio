"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import {
  TbArrowsDiagonal,
  TbChevronLeft,
  TbChevronRight,
} from "react-icons/tb";
import Image from "next/image";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LighBoxZoom from "yet-another-react-lightbox/plugins/zoom";

function SingleProjectPics({ project = {} }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const zoomLightboxRef = useRef(null);
  const lightBoxSlides = project?.images?.map((img) => ({
    src: img,
    alt: project?.name,
  }));

  function openLightBox() {
    setIsLightBoxOpen(true);
  }

  return (
    <div className="lg:sticky top-25 lg:w-2/3  space-y-4">
      <div className="h-[400px]">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Thumbs, FreeMode, Zoom]}
          freeMode={true}
          watchSlidesProgress={true}
          loop
          zoom
          className="flex-grow h-full overflow-hidden cursor-grab relative bg-black border-2 rounded-md"
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        >
          {project?.images?.map((pic, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full swiper-zoom-container">
                <Image
                  className="object-contain z-1"
                  src={pic || "/images/placeholder.jpg"}
                  alt={project?.name}
                  fill
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                />
              </div>
            </SwiperSlide>
          ))}
          <TbArrowsDiagonal
            onClick={openLightBox}
            className="absolute bottom-2 text-3xl right-2 z-2 bg-amber-200 rounded-sm p-0.5 border-2 hover:bg-green-200 transition-all duration-300 cursor-pointer"
          />
        </Swiper>
      </div>

      <div className="relative px-5 [&_button]:bg-amber-200 [&_button]:border-2 [&_button]:cursor-pointer [&_button]:rounded-full [&_button]:p-0.5 [&_button]:hover:bg-green-200 [&_button]:active:bg-green-200 [&_button]:transition-all [&_button]:duration-300">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={15}
          slidesPerView={5}
          modules={[Navigation, Thumbs, FreeMode]}
          freeMode={true}
          watchSlidesProgress={true}
          loop
          navigation={{ nextEl: ".nextProject", prevEl: ".previousProject" }}
          className="h-full w-full overflow-hidden cursor-pointer shrink-0"
        >
          {project?.images?.map((pic, index) => (
            <SwiperSlide key={index}>
              <div className="w-30 h-15 relative border-2 rounded overflow-hidden">
                <Image
                  className="object-cover brightness-90 active:brightness-100 hover:brightness-100 transition-all duration-300"
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
        <button className="previousProject  absolute top-1/2 z-2 left-0  text-xl -translate-y-1/2 ">
          <TbChevronLeft />
        </button>
        <button className="nextProject absolute top-1/2 z-2 right-0  text-xl -translate-y-1/2">
          <TbChevronRight />
        </button>
      </div>
      <Lightbox
        open={isLightBoxOpen}
        close={() => setIsLightBoxOpen(false)}
        slides={lightBoxSlides}
        plugins={[LighBoxZoom]}
        index={currentIndex}
        zoom={{ ref: zoomLightboxRef }}
      />
    </div>
  );
}

export default SingleProjectPics;
