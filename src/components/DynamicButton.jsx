export default function DynamicButton({ handleClick }) {
  return (
    <>
      <button
        className="w-full h-10 bg-blue-500 text-white font-semibold rounded cursor-pointer flex justify-center items-center gap-2 hover:scale-105 transition-all duration-300"
        onClick={handleClick}
      >
        <div>
          <img
            className="w-5"
            src="/icons/telegram.svg"
            alt="send-message-icon"
          />
        </div>
        <div>Send Message</div>
      </button>
    </>
  );
}
