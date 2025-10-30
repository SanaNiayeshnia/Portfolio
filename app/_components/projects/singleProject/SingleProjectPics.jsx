"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { TbArrowsDiagonal, TbChevronDown, TbChevronUp } from "react-icons/tb";
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
    <div className="flex-grow w-full h-[400px] flex gap-4">
      <div className="relative py-8">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={15}
          slidesPerView={4}
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
        <div className="flex flex-col items-center gap-4 justify-between absolute left-1/2 [&_button]:z-2 bottom-0 top-0  text-xl -translate-x-1/2 [&_button]:bg-amber-200 [&_button]:border-2 [&_button]:cursor-pointer [&_button]:rounded-full [&_button]:p-0.5 [&_button]:hover:bg-green-200 [&_button]:active:bg-green-200 [&_button]:transition-all [&_button]:duration-300">
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
        zoom
        className="flex-grow h-full overflow-hidden cursor-pointer relative bg-black"
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
          className="absolute bottom-2 text-3xl right-2 z-2 bg-amber-200 rounded-sm p-0.5 border-2 hover:bg-green-200 transition-all duration-300"
        />
      </Swiper>
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
