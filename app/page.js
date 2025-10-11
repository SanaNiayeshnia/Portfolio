import Image from "next/image";
import HomeBio from "./_components/home/HomeBio";

export default function Home() {
  return (
    <div>
      <Image
        src="/images/doodles/doodle21.png"
        alt="doodle"
        width="100"
        height="100"
        className="-ml-15 z-10"
      />
      <HomeBio />
    </div>
  );
}
