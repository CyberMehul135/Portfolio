export default function WorkSectionHorizontalLine({
  projectUrl,
  projectThemeColor,
  toolTipColor,
  isImgDirectionLeft,
  darkMode,
}) {
  return (
    <div
      className={`w-[40%] h-[2px] ${toolTipColor} absolute top-1/2 max-md:hidden ${
        isImgDirectionLeft ? "right-0" : "left-0"
      } `}
    >
      <a
        href={projectUrl}
        target="new"
        className={`w-4 h-4 ${
          darkMode ? "bg-[rgb(17,17,17)]" : "bg-white"
        } border-[3px] ${projectThemeColor} rounded-[50%] absolute top-1/2 -translate-y-[50%] hover:scale-125 transition-all ${
          isImgDirectionLeft
            ? "right-0 translate-x-[50%]"
            : "left-0 -translate-x-[50%]"
        }  `}
      ></a>
    </div>
  );
}
