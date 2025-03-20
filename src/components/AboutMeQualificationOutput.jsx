import AboutMeQualificationEducation from "./AboutMeQualificationEducation";
import AboutMeQualificationExperience from "./AboutMeQualificationExperience";
import AboutMeQualificationSkills from "./AboutMeQualificationSkills";

export default function AboutMeQualificationOutput({
  qualification,
  educations,
  experience,
}) {
  return (
    <>
      <div>
        {qualification == "Skills" ? (
          <AboutMeQualificationSkills />
        ) : qualification == "Experience" ? (
          <AboutMeQualificationExperience experience={experience} />
        ) : qualification == "Education" ? (
          <AboutMeQualificationEducation educations={educations} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
