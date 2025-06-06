export default function WorkSectionHeader({ text }) {
  return (
    <>
      <h1 className="text-4xl max-sm:text-2xl max-sm:max-w-[190px] font-semibold text-[rgb(23,136,174)] border-l-[2px] border-r-[2px] border-b-[2px] border-t-[2px] rounded-tl-lg rounded-tr-lg max-w-[260px]  px-5 pb-4 pt-2 rounded-bl-lg rounded-br-lg mx-auto flex justify-center">
        {text}
      </h1>
    </>
  );
}
