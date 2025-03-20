export default function AboutMeQualificationEducation({ educations }) {
  return (
    <div className="flex flex-col gap-2">
      {educations?.map((education, i) => {
        return (
          <div key={i}>
            <div className="text-[15px] text-blue-300">
              {education?.passingYear}
            </div>
            <div className="text-sm">{education.qualified}</div>
          </div>
        );
      })}
    </div>
  );
}
