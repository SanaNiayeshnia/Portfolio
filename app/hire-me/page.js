import HireMeGetInTouch from "../_components/hireMe/HireMeGetInTouch";
import HireMeIntro from "../_components/hireMe/HireMeIntro";
import Underline from "../_components/ui/Underline";

function HireMe() {
  return (
    <div className="mt-10">
      <HireMeIntro />
      <HireMeGetInTouch />
      <div className="text-4xl flex items-start gap-2 font-caveat justify-center font-medium px-4 text-center py-20">
        Because milliseconds matter—and your users deserve a{" "}
        <Underline>smooth ride</Underline>.
      </div>
    </div>
  );
}

export default HireMe;
