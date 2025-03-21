import AboutMeQualificationEducation from "./AboutMeQualificationEducation";
import AboutMeQualificationExperience from "./AboutMeQualificationExperience";
import AboutMeQualificationSkills from "./AboutMeQualificationSkills";

export default function AboutMeQualificationOutput({
  qualification,
  educations,
  experience,
  skills,
}) {
  return (
    <>
      <div>
        {qualification == "Skills" ? (
          <AboutMeQualificationSkills skills={skills} />
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
