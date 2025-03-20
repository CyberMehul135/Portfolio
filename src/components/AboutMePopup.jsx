import AboutMeDetailsSection from "./AboutMeDetailsSection";
import AboutMeImageSection from "./AboutMeImageSection";
import { useState } from "react";
import CloseButton from "./CloseButton";

export default function AboutMePopup({ popupOn, setPopupOn }) {
  const [aboutMeParagraph, setAboutMeParagraph] =
    useState(`I help business owners and busy web developers to design & develop
            creative websites that fits their vision and attracts the visitors to
            stay for ever. Technologies and tools that I use to create such
            awesome websites.`);
  const [techHashTags, setTechHashTags] = useState([
    "#react",
    "#javascript",
    "#css",
    "#tailwind",
    "#html",
    "#figma",
    "#git",
    "#github",
    "#terminal",
    "#reactrouter",
  ]);

  return (
    <>
      <div
        className={`absolute z-10  w-full h-full max-w-[1500px] max-h-[630px] flex justify-center items-center px-10 py-5 text-white max-sm:px-3 ${
          popupOn
            ? "block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 transition-all duration-200 ease-in-out"
            : "block top-[59%] left-[15.5%] -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-200 ease-in-out max-sm:top-[73%] max-sm:left-[50%]"
        }`}
      >
        <div className=" w-full h-fit rounded-xl bg-[rgb(25,25,25)] relative px-10 py-5 flex max-md:h-fit">
          <AboutMeDetailsSection
            aboutMeHeading={`ABOUT ME`}
            aboutMeParagraph={aboutMeParagraph}
            techHashTags={techHashTags}
            aboutMeHeading2={`FRONTEND DEVELOPER`}
          />
          <AboutMeImageSection imageUrl={`/images/coder.svg`} />
          <CloseButton popupOn={popupOn} setPopupOn={setPopupOn} />
        </div>
      </div>
    </>
  );
}
