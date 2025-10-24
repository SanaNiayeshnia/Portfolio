import Image from "next/image";
import Button from "../ui/Button";
import { myGmail } from "@/app/_lib/db";

function HomeCollaboration() {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: myGmail,
    su: "Let's collaborate 🤝",
  });
  const url = `https://mail.google.com/mail/?${params.toString()}`;

  return (
    <div className="bg-white flex items-center flex-col gap-4 mt-30 py-13 px-5 md:px-10 border-4 shadow-strict  mx-5 md:w-3/4 md:mx-auto relative">
      <Image
        src="/images/doodles/doodle19.png"
        alt="doodle"
        width="100"
        height="100"
        className="absolute -top-10 right-1/10"
      />
      <h3 className="text-4xl font-semibold text-center flex items-center gap-2 flex-col sm:flex-row">
        <span>Let’s make your</span>
        <span>project fly</span>
      </h3>
      <p className="font-medium text-center flex items-center gap-2 flex-col flex-wrap sm:flex-row">
        <span>From first paint to last pixel —</span>{" "}
        <span>speed and beauty, hand in hand.</span>
      </p>
      <Button withDoodle href={url} target="_blank" rel="noopener noreferrer">
        Send Me a Message
      </Button>
    </div>
  );
}

export default HomeCollaboration;
