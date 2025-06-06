export default function Button({ handleClick, text }) {
  return (
    <>
      <button
        onClick={handleClick}
        className="text-white text-xl max-sm:text-[16px] font-semibold max-w-[300px] bg-green-700 bg-gradient-to-r from-[rgb(29,41,99)] to-[rgb(21,146,180)] rounded mx-auto px-4 py-2 cursor-pointer hover:scale-110 transition-all duration-100 flex"
      >
        {text}
      </button>
    </>
  );
}
