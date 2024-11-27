import Achivements from "@/components/Achivements";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Courses from "@/components/Courses"; 
import Team from "@/components/Team";
import Costomer from "@/components/Costomer";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <Explore />
      <Achivements />
      <Courses />
      <Team />
      <Costomer />
    </div>
  );
}
