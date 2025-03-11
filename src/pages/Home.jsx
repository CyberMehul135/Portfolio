import Button from "../components/Button";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="w-full bg-[rgb(17,17,17)]">
      <div className=" mx-auto flex flex-col  h-screen justify-between">
        <Navbar />
        <HeroSection />
        <Button text={"Latest Works"} />
      </div>
    </div>
  );
}
