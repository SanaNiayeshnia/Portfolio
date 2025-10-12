import { Caveat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Image from "next/image";
import Footer from "./_components/Footer";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata = {
  title: { template: "%s% | Sana's Portfolio", default: "Sana's Portfolio" },
  description: "Portfolio of a front-end developer called Sana Niayeshnia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${grotesk?.className} ${caveat?.variable} ${grotesk?.variable} bg-[#fefff0ee] antialiased `}
      >
        <div className="max-w-7xl  bg-no-repeat bg-cover bg-[url(/images/bg-mobile.png)] sm:bg-[url(/images/bg.png)] border-l-3 min-h-screen pt-6 pb-30 relative mx-auto h-full">
          <Image
            src="/images/doodles/doodle21.png"
            alt="doodle"
            width="100"
            height="100"
            className="absolute -top-8 -right-8 z-10 "
          />
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
