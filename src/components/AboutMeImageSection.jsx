export default function AboutMeImageSection({ imageUrl }) {
  return (
    <div className="w-1/2 flex justify-center items-center max-md:hidden">
      <img src={imageUrl} alt="coder-image" />
    </div>
  );
}
