import Image from "next/image";
import CustomButton from "./_components/ui/CustomButton";

function NotFound({ title = "Page" }) {
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

        <p className="text-4xl font-semibold">{title} not found</p>
        <p className="font-caveat text-2xl font-semibold">
          but your curiosity is appreciated
        </p>
        <CustomButton href="/" className="mt-4" withDoodle>
          Go Home
        </CustomButton>
      </div>
    </div>
  );
}

export default NotFound;
