import CoursesSection from "@/components/CoursesSection";
import CoursesStats from "@/components/CoursesStats";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SubjectSection from "@/components/SubjectSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoursesStats />
      <CoursesSection />
      <SubjectSection />
    </>
  );
}
