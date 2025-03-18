import WorkSectionHeader from "./WorkSectionHeader";
import WorkSectionProjects from "./WorkSectionProjects";

export default function WorkSection({ ref, darkMode }) {
  return (
    <div
      ref={ref}
      className={`w-full px-10 max-sm:px-5 ${
        darkMode ? "text-white bg-[rgb(17,17,17)]" : "text-black bg-white"
      }`}
    >
      <div className="max-w-[1600px] mx-auto">
        <WorkSectionHeader text={`Latest Work`} />
        <WorkSectionProjects darkMode={darkMode} />
      </div>
    </div>
  );
}
