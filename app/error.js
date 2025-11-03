"use client";

import Image from "next/image";
import CustomButton from "./_components/ui/CustomButton";

export default function Error({ reset }) {
  return (
    <div className="grid place-content-center h-[80vh]">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/doodles/doodle36.png"
          width="100"
          height="50"
          alt="doodle"
        />
        <h2 className="text-8xl font-semibold">
          <span className="text-sky-200 [-webkit-text-stroke:4px_black]">
            U
          </span>
          <span className="text-green-200 [-webkit-text-stroke:4px_black]">
            h
          </span>
          -
          <span className="text-amber-200 [-webkit-text-stroke:4px_black]">
            o
          </span>
          <span className="text-pink-200 [-webkit-text-stroke:4px_black]">
            h
          </span>
          !
        </h2>
        <p className="text-4xl font-semibold">An error ocurred</p>
        <p className="font-caveat text-2xl font-semibold">
          That wasn’t supposed to happen...
        </p>
        <CustomButton
          onClick={reset}
          className="mt-4"
          withDoodle
          aria-label="Try again"
        >
          Try Again
        </CustomButton>
      </div>
    </div>
  );
}
