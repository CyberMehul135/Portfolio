export default function ToolTip2({ name, textColor, bgColor, elementClick }) {
  return (
    <>
      <div
        className={`absolute left-1/2 -translate-x-1/2 text-[12px] font-semibold px-4 py-1 rounded-xl group-hover:top-0 group-hover:-translate-y-10 group-hover:scale-100 transition-all duration-200 group-hover:opacity-100 ${textColor} ${bgColor}  ${
          elementClick
            ? "top-0 -translate-y-10 scale-100 opacity-100"
            : "top-10 scale-0 opacity-0"
        }`}
      >
        {name}
      </div>
    </>
  );
}
