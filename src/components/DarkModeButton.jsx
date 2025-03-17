import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function DarkModeButton({ darkMode, setDarkMode }) {
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="z-10 cursor-pointer" onClick={handleDarkMode}>
      {darkMode ? <DarkModeIcon /> : <WbSunnyIcon />}
    </button>
  );
}
