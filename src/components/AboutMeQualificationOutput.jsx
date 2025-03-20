import AboutMeQualificationEducation from "./AboutMeQualificationEducation";
import AboutMeQualificationExperience from "./AboutMeQualificationExperience";
import AboutMeQualificationSkills from "./AboutMeQualificationSkills";

export default function AboutMeQualificationOutput({ qualification }) {
  return (
    <>
      <div>
        {qualification == "Skills" ? (
          <AboutMeQualificationSkills />
        ) : qualification == "Experience" ? (
          <AboutMeQualificationExperience />
        ) : qualification == "Education" ? (
          <AboutMeQualificationEducation />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
