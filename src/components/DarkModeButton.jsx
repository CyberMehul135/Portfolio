import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function DarkModeButton({ darkMode, setDarkMode }) {
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="z-10 cursor-pointer" onClick={handleDarkMode}>
      {darkMode ? (
        <WbSunnyIcon
          className="animate-spin"
          style={{ animationDuration: "20s" }}
        />
      ) : (
        <DarkModeIcon className="text-black" />
      )}
    </button>
  );
}
