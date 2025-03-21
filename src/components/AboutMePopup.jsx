import AboutMeDetailsSection from "./AboutMeDetailsSection";
import AboutMeImageSection from "./AboutMeImageSection";
import CloseButton from "./CloseButton";

export default function AboutMePopup({
  popupOn,
  setPopupOn,
  aboutMeHeading,
  aboutMeParagraph,
  techHashTags,
  aboutMeHeading2,
  educations,
  experience,
  skills,
  imageUrl,
  darkMode,
}) {
  return (
    <>
      <div
        className={`absolute z-10  w-full h-full max-w-[1500px] max-h-[630px] flex justify-center items-center px-10 py-5  max-sm:px-3 ${
          popupOn
            ? "block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 transition-all duration-200 ease-in-out"
            : "block top-[59%] left-[15.5%] -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-200 ease-in-out max-sm:top-[73%] max-sm:left-[50%]"
        }`}
      >
        <div
          className={`w-full h-fit rounded-xl relative px-10 py-5 flex max-md:h-fit max-sm:min-h-[600px] ${
            darkMode
              ? "text-white bg-[rgb(25,25,25)]"
              : "text-black bg-white shadow-2xl"
          }`}
        >
          <AboutMeDetailsSection
            aboutMeHeading={aboutMeHeading}
            aboutMeParagraph={aboutMeParagraph}
            techHashTags={techHashTags}
            aboutMeHeading2={aboutMeHeading2}
            educations={educations}
            experience={experience}
            skills={skills}
            darkMode={darkMode}
          />
          <AboutMeImageSection imageUrl={imageUrl} />
          <CloseButton setPopupOn={setPopupOn} darkMode={darkMode} />
        </div>
      </div>
    </>
  );
}
