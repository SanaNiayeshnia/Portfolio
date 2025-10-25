import Image from "next/image";

/**
 * @param {object} props - Component properties
 * @param {string} props.children - The text you want to draw a line under it
 * @param {string} props.className - Componet classNames
 */

function Underline({ className = "", children }) {
  return (
    <p className={`flex flex-col ${className}`}>
      <span>{children}</span>
      <span className="relative w-full h-2">
        <Image src="/images/doodles/doodle17.png" alt="doodle" fill />
      </span>
    </p>
  );
}

export default Underline;
