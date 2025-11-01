import Image from "next/image";
import CustomButton from "../ui/CustomButton";
import { getGmailRedirectUrl } from "@/app/_lib/utils";

function HomeCollaboration() {
  const url = getGmailRedirectUrl();
  return (
    <div className="bg-white flex items-center flex-col gap-4  py-13 px-5 md:px-10 border-4 shadow-strict relative mt-30 mx-5 md:w-3/4 md:mx-auto">
      <Image
        src="/images/doodles/doodle19.png"
        alt="doodle"
        width="100"
        height="100"
        className="absolute -top-10 right-1/10"
      />
      <h3 className="text-4xl font-semibold flex-wrap text-center flex items-center gap-2 flex-col sm:flex-row">
        <span>Let’s make your</span>
        <span>project fly</span>
      </h3>
      <p className="font-medium text-center flex items-center gap-2 flex-col flex-wrap sm:flex-row">
        <span>From first paint to last pixel —</span>{" "}
        <span>speed and beauty, hand in hand.</span>
      </p>
      <CustomButton
        withDoodle
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Send Me a Message
      </CustomButton>
      <Image
        src="/images/avatar/5.png"
        alt="avatar"
        width="100"
        height="100"
        className="absolute -bottom-35 xs:-bottom-28 sm:-bottom-20 lg:-bottom-8 -left-5 md:-left-8"
      />
    </div>
  );
}

export default HomeCollaboration;
