import { Caveat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "./_components/ui/navbar/Navbar";
import Footer from "./_components/ui/Footer";

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
        <main className="max-w-7xl  bg-no-repeat bg-cover bg-[url(/images/bg-mobile.png)] sm:bg-[url(/images/bg.png)] xl:border-l-3 min-h-screen pb-30 mx-auto h-full">
          <Navbar />
          <div className="overflow-x-hidden pt-8 xl:overflow-x-visible relative">
            <Image
              src="/images/doodles/doodle21.png"
              alt="doodle"
              width="100"
              height="100"
              className="absolute -top-8 -right-8 z-10 "
            />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
