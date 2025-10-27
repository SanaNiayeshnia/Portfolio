import Button from "@/app/_components/ui/Button";
import Image from "next/image";

function NotFound() {
  return (
    <div className="grid place-content-center h-[80vh]">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/doodles/doodle37.png"
          width="100"
          height="50"
          alt="doodle"
        />
        <h2 className="text-9xl font-bold ">
          <span className="text-amber-200 [-webkit-text-stroke:4px_black]">
            4
          </span>
          <span className="text-pink-200 [-webkit-text-stroke:4px_black]">
            0
          </span>
          <span className="text-green-200 [-webkit-text-stroke:4px_black]">
            4
          </span>
        </h2>

        <p className="text-4xl font-semibold">Page not found</p>
        <p className="font-caveat text-2xl font-semibold">
          but your curiosity is appreciated
        </p>
        <Button href="/" className="mt-4" withDoodle>
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
