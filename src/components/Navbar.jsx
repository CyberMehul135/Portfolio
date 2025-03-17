import DarkModeButton from "./DarkModeButton";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="w-full bg-transparent text-white px-14 max-sm:px-5">
      <div className="w-full max-w-[1600px] h-20 mx-auto flex justify-between items-center">
        <span className="z-10">
          <img
            src="/images/CM_Gradient_Double_Stroke_Final.png"
            alt="website-logo"
            className="w-16 h-16 hover:scale-110"
          />
        </span>
        <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}
