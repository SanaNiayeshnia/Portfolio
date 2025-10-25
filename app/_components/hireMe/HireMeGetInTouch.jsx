import { contactMethods } from "@/app/_lib/db";
import BorderFrame from "../ui/BorderFrame";
import Link from "next/link";
import Image from "next/image";
import HighLighter from "../ui/Highlighter";
import ReferenceButton from "../ui/ReferenceButton";

const colors = ["green", "sky", "pink", "amber"];

function HireMeGetInTouch() {
  return (
    <div>
      <BorderFrame
        className="!min-h-max !w-full"
        contentWrapperClassName="relative !pt-12"
      >
        <p className="font-caveat bg-amber-200 text-4xl font-semibold absolute top-0 -left-12 -rotate-30 ">
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
                <span>{method?.label}:</span>
                <Link href={method?.link} className="relative" target="_blank">
                  {method?.value}
                  <HighLighter className={`bg-${colors?.[index]}-200`} />
                </Link>
              </div>

              <ReferenceButton
                href={method?.link}
                className="hover:gap-4 active:gap-4"
                target="_blank"
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
