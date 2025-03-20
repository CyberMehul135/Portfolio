import CloseIcon from "@mui/icons-material/Close";

export default function CloseButton({ popupOn, setPopupOn }) {
  const handleClick = () => {
    setPopupOn(false);
  };

  return (
    <>
      <button
        className={`absolute right-7 rounded-[50%] w-8 h-8 flex justify-center items-center bg-[rgb(39,41,45)] shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer hover:rotate-180 duration-100`}
        onClick={handleClick}
      >
        <CloseIcon sx={{ fontSize: 18 }} />
      </button>
    </>
  );
}
