import HireMeGetInTouch from "../_components/hireMe/HireMeGetInTouch";
import HireMeIntro from "../_components/hireMe/HireMeIntro";
import Underline from "../_components/ui/Underline";

function HireMe() {
  return (
    <div className="mt-10">
      <HireMeIntro />
      <HireMeGetInTouch />
      <div className="text-3xl sm:text-4xl flex flex-col md:flex-row items-start gap-2 font-caveat justify-center font-medium px-4 text-center py-20 flex-wrap">
        <span>Because milliseconds matter—</span>
        <p className="flex items-start gap-2 flex-wrap">
          <span>and your users deserve a</span>
          <Underline>smooth ride.</Underline>
        </p>
      </div>
    </div>
  );
}

export default HireMe;
