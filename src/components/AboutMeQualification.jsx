import { useState } from "react";
import AboutMeQualificationOutput from "./AboutMeQualificationOutput";

export default function AboutMeQualification({ educations, experience }) {
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
        <span>Skills</span>
        <span>Experience</span>
        <span>Education</span>
      </div>

      <AboutMeQualificationOutput
        qualification={qualification}
        educations={educations}
        experience={experience}
      />
    </div>
  );
}
