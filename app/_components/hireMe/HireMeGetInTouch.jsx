import { contactMethods } from "@/app/_lib/db";
import BorderFrame from "../ui/BorderFrame";
import Link from "next/link";
import Image from "next/image";
import HighLighter from "../ui/Highlighter";
import ReferenceButton from "../ui/ReferenceButton";

const colors = ["green", "sky", "pink", "amber"];

function HireMeGetInTouch() {
  return (
    <div className="mt-15 md:mt-10">
      <BorderFrame
        className="!min-h-max !w-full"
        contentWrapperClassName="relative pt-10 md:!pt-12"
      >
        <p className="font-caveat bg-amber-200 text-4xl font-semibold absolute -top-5 right-1/2 translate-x-1/2 md:top-0 md:-left-12 md:right-auto md:translate-x-0 md:-rotate-30 ">
          Get in touch
        </p>
        <ul className="space-y-2">
          {contactMethods?.map((method, index) => (
            <li
              key={index}
              className="font-medium flex items-center gap-2 justify-between text-lg"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/images/doodles/doodle24.png"
                  alt="doodle"
                  width="12"
                  height="12"
                />
                <span className="hidden sm:block">{method?.label}:</span>
                <Link href={method?.link} className="relative" target="_blank">
                  {method?.value}
                  <HighLighter className={`bg-${colors?.[index]}-200`} />
                </Link>
              </div>

              <ReferenceButton
                href={method?.link}
                className="hover:gap-4 active:gap-4"
                target="_blank"
                aria-label={`Link to ${method?.label}`}
              >
                <method.icon className="text-base mr-1" />
              </ReferenceButton>
            </li>
          ))}
        </ul>
      </BorderFrame>
    </div>
  );
}

export default HireMeGetInTouch;
