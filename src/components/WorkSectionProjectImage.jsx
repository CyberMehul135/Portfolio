import ToolTip from "./ToolTip";
import WorkSectionHorizontalLine from "./WorkSectionHorizontalLine";

export default function WorkSectionProjectImage({
  projectUrl,
  projectImage,
  isImageLaptopType,
  toolTipText,
  toolTipColor,
  toolTipAfterColor,
  isImgDirectionLeft,
  projectThemeColor,
  darkMode,
}) {
  return (
    <div className="w-1/2 flex items-center relative justify-center max-md:w-full">
      <a
        href={projectUrl}
        target="new"
        className={`group relative z-10 ${
          isImageLaptopType ? "max-w-[400px]" : "max-w-[500px]"
        }`}
      >
        <img
          src={projectImage}
          alt="Ecommerce-project"
          className="hover:scale-110 transition-all duration-200 cursor-pointer"
        />

        <ToolTip
          text={toolTipText}
          color={toolTipColor}
          afterColor={toolTipAfterColor}
        />
      </a>

      <WorkSectionHorizontalLine
        projectUrl={projectUrl}
        projectThemeColor={projectThemeColor}
        toolTipColor={toolTipColor}
        isImgDirectionLeft={isImgDirectionLeft}
        darkMode={darkMode}
      />
    </div>
  );
}
