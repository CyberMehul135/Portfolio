export default function TextAreaComponent({ darkMode }) {
  return (
    <div>
      <label htmlFor="message" className="flex gap-1 items-center mb-2">
        <div className="w-[20px] h-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-message-square"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <div className={`${darkMode ? "text-white" : "text-[rgb(68,68,68)]"}`}>
          Message
        </div>
      </label>
      <textarea
        name="message"
        id="message"
        // rows={5}
        // cols={10}
        className="border border-[rgb(206,212,218)] outline-[rgb(23,136,174)] rounded w-full px-4 py-4 text-lg min-h-[200px] max-md:min-h-[120px]"
        required
      ></textarea>
    </div>
  );
}
