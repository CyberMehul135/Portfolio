import DynamicButton from "./DynamicButton";
import InputComponent from "./InputComponent";
import TextAreaComponent from "./TextAreaComponent";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useState } from "react";

export default function FormComponent({ darkMode }) {
  // const handleClick = (e) => {
  //   e.preventDefault();
  // };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

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
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
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
