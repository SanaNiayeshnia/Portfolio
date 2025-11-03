import Image from "next/image";

import Underline from "../../ui/Underline";
import { getProjects } from "@/app/_lib/data_services";
import PortfolioSlider from "./PortfolioSlider";

async function HomePortfolio({ loading = false }) {
  const projects = loading
    ? Array.from({ length: 3 }).fill({})
    : await getProjects({});

  return (
    <section className="mt-30 sm:mt-20 ">
      <div className="flex items-center gap-4 justify-center mb-5">
        <h2 className="flex gap-2 text-4xl md:text-5xl font-bold px-5 md:px-10">
          My <Underline>Portfolio</Underline>
        </h2>
        <Image
          src="/images/doodles/doodle6.png"
          alt="doodle"
          width="100"
          height="100"
          loading="lazy"
        />
      </div>
      <PortfolioSlider projects={projects} loading={loading} />
    </section>
  );
}

export default HomePortfolio;
