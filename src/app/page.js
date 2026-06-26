import Hero from "@/components/home/Hero";
import FeaturedTasks from "@/components/home/FeaturedTasks";
import TopFreelancers from "@/components/home/TopFreelancers";
import HowItWorks from "@/components/home/HowItWorks";
import PlatformStatistics from "@/components/home/PlatformStatistics";

export default function Home() {
  return (
    <>
      <Hero />
      <TopFreelancers />
      <FeaturedTasks />
      <HowItWorks />
      <PlatformStatistics />
    </>
  );
}
