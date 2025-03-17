import DynamicLink from "./DynamicLink";
import WorkSectionProjectDetail from "./WorkSectionProjectDetail";
import WorkSectionProjectImage from "./WorkSectionProjectImage";

export default function WorkSectionSingleProject({
  projectUrl,
  projectImage,
  isImageLaptopType,
  toolTipText,
  toolTipColor,
  toolTipAfterColor,
  projectName,
  projectType,
  projectThemeColor,
  ProjectDescription,
  projectTechnologies,
  isImgDirectionLeft,
  darkMode,
}) {
  return (
    <div
      className={`flex justify-between relative z-20 max-md:flex-col max-md:items-center ${
        isImgDirectionLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <WorkSectionProjectImage
        projectUrl={projectUrl}
        projectImage={projectImage}
        isImageLaptopType={isImageLaptopType}
        toolTipText={toolTipText}
        toolTipColor={toolTipColor}
        toolTipAfterColor={toolTipAfterColor}
        isImgDirectionLeft={isImgDirectionLeft}
        projectThemeColor={projectThemeColor}
        darkMode={darkMode}
      />

      <DynamicLink
        text={projectName}
        toolTipColor={toolTipColor}
        projectUrl={projectUrl}
      />

      <WorkSectionProjectDetail
        projectName={projectName}
        projectType={projectType}
        projectThemeColor={projectThemeColor}
        ProjectDescription={ProjectDescription}
        ProjectTechnologies={projectTechnologies}
        isImgDirectionLeft={isImgDirectionLeft}
      />
    </div>
  );
}
