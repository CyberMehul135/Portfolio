import WorkSectionHeader from "./WorkSectionHeader";
import WorkSectionProjects from "./WorkSectionProjects";

export default function WorkSection({ ref }) {
  return (
    <div
      ref={ref}
      className="text-black bg-white w-full px-10 pb-10 max-sm:px-5"
    >
      <div className="max-w-[1600px] mx-auto">
        <WorkSectionHeader />
        <WorkSectionProjects />
      </div>
    </div>
  );
}
