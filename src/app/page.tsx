import { Archive } from "@/components/Archive";
import { Collaborations } from "@/components/Collaborations";
import { DropSchedule } from "@/components/DropSchedule";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Interpreter } from "@/components/Interpreter";
import { Marquee } from "@/components/Marquee";
import { Signup } from "@/components/Signup";
import { Story } from "@/components/Story";
import { TimelineMarquee } from "@/components/TimelineMarquee";
import { Values } from "@/components/Values";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Marquee />
      <Story />
      <TimelineMarquee />
      <Archive />
      <Interpreter />
      <Collaborations />
      <Values />
      <DropSchedule />
      <Signup />
      <Footer />
    </main>
  );
}
