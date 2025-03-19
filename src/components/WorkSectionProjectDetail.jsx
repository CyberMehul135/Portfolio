export default function WorkSectionProjectDetail({
  projectName,
  projectType,
  projectThemeColor,
  ProjectDescription,
  ProjectTechnologies,
  isImgDirectionLeft,
}) {
  return (
    <div
      className={`w-1/2 flex flex-col items-start justify-center max-md:w-full max-md:pl-0 max-md:mt-[20px] ${
        isImgDirectionLeft ? "pl-10" : "pr-10 max-sm:pr-0"
      }`}
    >
      <h2
        className={`text-3xl max-md:text-[24px] font-bold ${projectThemeColor} mb-3 mt-2`}
      >
        {projectName}
      </h2>
      <p
        className={`text-lg max-md:text-[16px] ${projectThemeColor} font-semibold mb-3`}
      >
        {projectType}
      </p>
      <p className="mb-3 text-[17px] max-md:text-[15px]">
        {ProjectDescription}
      </p>
      <ul className="flex gap-2 flex-wrap">
        {ProjectTechnologies.map((technologies, index) => {
          return (
            <li
              key={index}
              className="border border-[rgb(221,221,221)] rounded-2xl flex justify-center py-[3px] px-[8px] text-sm "
            >
              {technologies}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
