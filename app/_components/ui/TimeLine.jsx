/**
 *
 * @param {object} props - Component properties
 * @param {Array<{title:string,icon:React.ReactNode, description:string}>} [props.items=[]] -Array of timeline items, each with title, date, and optional description
 *
 */

import { colors } from "@/app/_lib/db";
import Image from "next/image";

export default function TimeLine({ items = [] }) {
  return (
    <div>
      {items?.map((item, index) => (
        <div
          key={index}
          className={`flex pl-5 flex-col-reverse sm:p-0 ${
            index % 2 !== 0 ? "sm:flex-row-reverse" : "sm:flex-row"
          }`}
        >
          <div className="sm:w-1/2 shrink-0 grid place-items-center border-l-2 sm:border-l-0">
            {!!item?.img && (
              <div className="relative w-46 aspect-square">
                <Image
                  src={item?.img}
                  alt={item?.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <div
              className={`flex items-center gap-2 my-2  ${
                index % 2 !== 0
                  ? "sm:self-end sm:flex-row-reverse -translate-x-5 sm:translate-x-5"
                  : "-translate-x-5"
              }`}
            >
              <p
                className={`bg-${colors?.[index]}-200 text-2xl rounded-full p-2 border-3`}
              >
                {item?.icon}
              </p>
              <h4 className="font-semibold text-2xl">{item?.title}</h4>
            </div>
            <div
              className={`font-medium text-justify px-5 py-12 ${
                index % 2 !== 0
                  ? "border-l-2 sm:border-l-0 sm:border-r-2"
                  : "border-l-2"
              }`}
            >
              {item?.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
