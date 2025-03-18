export default function InputComponent({
  inputType,
  inputName,
  inputIconUrl,
  darkMode,
}) {
  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor={inputName}
        className="text-black mb-[2px] flex gap-2 items-center"
      >
        <div
          className={`w-[20px] h-[30px] ${
            darkMode ? "text-white" : "text-[rgb(68,68,68)]"
          }`}
        >
          {inputIconUrl}
        </div>
        <div className={`${darkMode ? "text-white" : "text-[rgb(68,68,68)]"}`}>
          {inputName}
        </div>
      </label>
      <input
        type={inputType}
        id={inputName}
        className="w-full h-10 px-3 border border-[rgb(206,212,218)] rounded outline-blue-400 text-[16px]"
      />
    </div>
  );
}
