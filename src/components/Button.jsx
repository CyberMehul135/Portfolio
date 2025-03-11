export default function Button({ handleClick, text, element }) {
  return (
    <>
      <button
        onClick={handleClick}
        className="text-white text-xl font-semibold max-w-[300px] bg-green-700 bg-gradient-to-r from-[rgb(29,41,99)] to-[rgb(21,146,180)] rounded mx-auto px-4 py-2 cursor-pointer hover:scale-110 transition-all duration-100 flex group"
      >
        {text}
        <span className="left-28 group-hover:left-32 transition-all duration-200 absolute">
          {element}
        </span>
      </button>
    </>
  );
}
