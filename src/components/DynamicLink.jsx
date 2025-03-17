export default function DynamicLink({ toolTipColor, text, projectUrl }) {
  return (
    <a
      href={projectUrl}
      target="new"
      className={`text-white text-xl ${toolTipColor} max-sm:text-[16px] font-semibold max-w-[300px] rounded mx-auto px-4 py-2 cursor-pointer hidden max-sm:flex max-sm:mt-5`}
    >
      <span className="text-sm">{text}</span>
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
    </a>
  );
}
