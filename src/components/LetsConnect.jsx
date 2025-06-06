import FormComponent from "./FormComponent";
import WorkSectionHeader from "./WorkSectionHeader";

export default function LetsConnect({ darkMode }) {
  return (
    <>
      <div
        className={`w-full h-full px-10 pb-5 max-sm:px-5 max-md:pt-5 ${
          darkMode ? "text-white bg-[rgb(17,17,17)]" : "text-black bg-white"
        }`}
      >
        <div className={`max-w-[1600px] mx-auto`}>
          <WorkSectionHeader text={`Let's connect`} />
          <FormComponent darkMode={darkMode} />
        </div>
      </div>
    </>
  );
}
