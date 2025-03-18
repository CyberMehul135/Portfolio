import DynamicButton from "./DynamicButton";
import InputComponent from "./InputComponent";
import TextAreaComponent from "./TextAreaComponent";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function FormComponent({ darkMode }) {
  return (
    <div className="flex justify-between py-10 max-md:flex-col">
      <div className="w-1/2 max-md:w-full">
        <img
          className="w-full h-full"
          src="/images/contact-me.svg"
          alt="contact-me-image"
        />
      </div>
      <form
        className="w-1/2 flex flex-col gap-4 px-4 max-md:w-full max-sm:px-0"
        action="https://formsubmit.co/mehulrathod9254@gmail.com"
        method="POST"
      >
        {/* Hidden Inputs */}
        <input
          type="hidden"
          name="_subject"
          value="New Contact Form Submission!"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input
          type="hidden"
          name="_next"
          // value="https://yourdomain.com/thank-you"
        />
        <InputComponent
          inputType={`text`}
          inputName={`name`}
          inputLable={`Name`}
          inputIconUrl={<PermIdentityIcon />}
          darkMode={darkMode}
        />
        <InputComponent
          inputType={`email`}
          inputName={`email`}
          inputLable={`Email`}
          inputIconUrl={<AlternateEmailIcon />}
          darkMode={darkMode}
        />
        <TextAreaComponent darkMode={darkMode} />
        <DynamicButton />
      </form>
    </div>
  );
}
