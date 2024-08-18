import CoursesSection from "@/components/CoursesSection";
import CoursesStats from "@/components/CoursesStats";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoursesStats />
      <CoursesSection />
    </>
  );
}
