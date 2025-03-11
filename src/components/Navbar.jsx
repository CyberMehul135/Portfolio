export default function Navbar() {
  return (
    <div className="w-full bg-transparent text-white px-14 max-sm:px-5">
      <div className="w-full max-w-[1600px] h-20 mx-auto flex justify-between items-center">
        <span>
          <img
            src="/images/name-logo-white.svg"
            alt="my icon"
            className="w-16 h-16 hover:scale-110"
          />
        </span>
      </div>
    </div>
  );
}
