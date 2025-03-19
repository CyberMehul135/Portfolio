export default function DynamicButton({ success }) {
  return (
    <>
      <button
        className={`w-full h-10 text-white font-semibold rounded cursor-pointer flex justify-center items-center gap-2 hover:scale-105 transition-all duration-300 ${
          success ? "bg-green-500" : "bg-[rgb(23,136,174)]"
        } `}
        type="submit"
      >
        <div>
          <img
            className="w-5"
            src="/icons/telegram.svg"
            alt="send-message-icon"
          />
        </div>
        <div>{success ? "Submited" : "Send Message"}</div>
      </button>
    </>
  );
}
