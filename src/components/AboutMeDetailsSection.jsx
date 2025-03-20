import AboutMeHeading from "./AboutMeHeading";
import AboutMeHeading2 from "./AboutMeHeading2";
import AboutMeParagraph from "./AboutMeParagraph";
import AboutMeQualification from "./AboutMeQualification";
import HashTags from "./HashTags";

export default function AboutMeDetailsSection({
  techHashTags,
  aboutMeParagraph,
  aboutMeHeading,
  aboutMeHeading2,
  educations,
  experience,
}) {
  return (
    <div className="w-1/2 flex flex-col items-center justify-around max-md:w-full">
      <div className="flex flex-col gap-5 max-w-[400px] w-full max-md:items-center">
        <AboutMeHeading aboutMeHeading={aboutMeHeading} />
        <AboutMeParagraph aboutMeParagraph={aboutMeParagraph} />
        <HashTags techHashTags={techHashTags} />
      </div>

      <div className="flex flex-col gap-[10px] max-w-[400px] w-full h-1/2 mt-10 max-md:items-center">
        <AboutMeHeading2 aboutMeHeading2={aboutMeHeading2} />
        <AboutMeQualification educations={educations} experience={experience} />
      </div>
    </div>
  );
}
