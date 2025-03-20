export default function AboutMeQualificationExperience({ experience }) {
  return (
    <div className="flex flex-col gap-3">
      {experience.map((project, i) => {
        return (
          <div key={i}>
            <div className="text-[15px] text-blue-300">{project.project}</div>
            <div className="text-sm">{project.techStack}</div>
          </div>
        );
      })}
    </div>
  );
}
