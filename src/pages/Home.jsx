import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col bg-black h-screen justify-between">
      <Navbar />
      <HeroSection />
    </div>
  );
}
