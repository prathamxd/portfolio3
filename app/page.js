import Hero from "@/components/Hero";
import RecentWork from "@/components/RecentWork";
import ScrollEffect from "@/components/ScrollEffect";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ScrollEffect />
      <RecentWork noOfProjects={4} />
      <Socials />
    </main>
  );
}
