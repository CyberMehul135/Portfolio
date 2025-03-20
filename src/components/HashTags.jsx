export default function HashTags({ techHashTags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {techHashTags.map((hashTag, index) => {
        return (
          <span
            key={index}
            className="text-sm max-sm:text-[12.5px] border border-[rgb(68,68,68)] w-fit px-3 py-[3px] rounded-2xl flex justify-center items-center"
          >
            {hashTag}
          </span>
        );
      })}
    </div>
  );
}
