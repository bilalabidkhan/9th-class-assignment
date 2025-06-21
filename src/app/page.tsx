"use client";

import Achivements from "@/components/Achivements";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Courses from "@/components/Courses"; 
import Team from "@/components/Team";
import Costomer from "@/components/Costomer";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  }, []);
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
