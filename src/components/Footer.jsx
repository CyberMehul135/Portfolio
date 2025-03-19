import SocialMediaLinks from "./SocialMediaLinks";

export default function Footer({ darkMode }) {
  return (
    <>
      <div
        className={`w-full h-full px-10 max-sm:px-5 flex flex-col items-center relative pb-14 ${
          darkMode ? "bg-[rgb(17,17,17)] text-white" : "bg-white text-black"
        }`}
      >
        <div className="text-[rgb(186,182,183)] text-[13px] -mb-[14px]">
          Cyber Mehul © 2025
        </div>
        <div className="w-20 h-20">
          <img
            className="w-full h-full"
            src="/images/CM_Gradient_Double_Stroke_Final.png"
            alt="logo"
          />
        </div>
        <SocialMediaLinks
          wantHorizontally={true}
          color={"text-[rgb(23,136,174)]"}
          hoverColor={`hover:text-[rgb(23,136,174)]`}
          width={`w-[18px]`}
        />
      </div>
    </>
  );
}
