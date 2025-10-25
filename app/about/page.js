import AboutRandomFacts from "../_components/about/AboutRandomFacts";
import TimeLine from "../_components/ui/TimeLine";
import { aboutContent } from "../_lib/db";

export const metadata = { title: "About" };

function About() {
  return (
    <div className="px-5 mt-5 pb-20">
      <TimeLine items={aboutContent} />
      <AboutRandomFacts />
    </div>
  );
}

export default About;
