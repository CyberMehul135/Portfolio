export default function ToolTip({ text, color, afterColor }) {
  return (
    <div
      className={`absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 ${color} px-7 py-[12px] rounded-lg text-white font-bold group-hover:-translate-y-[150%] transition-all duration-200 opacity-0 group-hover:opacity-100 max-sm:hidden`}
    >
      <div className="flex">
        <span>{text}</span>
        <span className="ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-external-link h-[20px] w-[20px]"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </span>
      </div>
      <div
        className={`after:content-[''] after:w-[20px] after:h-[20px] ${afterColor} after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-[180%] after:rotate-45`}
      ></div>
    </div>
  );
}
