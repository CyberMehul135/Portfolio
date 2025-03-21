import { useState } from "react";
import AboutMeQualificationOutput from "./AboutMeQualificationOutput";

export default function AboutMeQualification({
  educations,
  experience,
  skills,
}) {
  const [qualification, setQualification] = useState("Skills");

  const handleClick = (e) => {
    let value = e.target.innerText;
    if (value == "Skills" || value == "Experience" || value == "Education") {
      setQualification(e.target.innerText);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div
        className="flex gap-6 max-md:justify-center max-sm:text-[15.5px]"
        onClick={handleClick}
      >
        <span
          className={`cursor-pointer ${
            qualification == "Skills"
              ? "px-2 py-[1px] bg-[rgb(39,41,45)] shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded-xl"
              : ""
          }`}
        >
          Skills
        </span>
        <span
          className={`cursor-pointer ${
            qualification == "Experience"
              ? "px-2 py-[1px] bg-[rgb(39,41,45)] shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded-xl"
              : ""
          }`}
        >
          Experience
        </span>
        <span
          className={`cursor-pointer ${
            qualification == "Education"
              ? "px-2 py-[1px] bg-[rgb(39,41,45)] shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded-xl"
              : ""
          }`}
        >
          Education
        </span>
      </div>

      <AboutMeQualificationOutput
        qualification={qualification}
        educations={educations}
        experience={experience}
        skills={skills}
      />
    </div>
  );
}
