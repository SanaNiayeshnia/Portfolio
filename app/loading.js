import Image from "next/image";

function Loading() {
  return (
    <div className="grid place-items-center min-h-[80vh]">
      <Image
        alt="loader"
        src="/images/animations/loader.gif"
        width="100"
        height="100"
      />
    </div>
  );
}

export default Loading;
