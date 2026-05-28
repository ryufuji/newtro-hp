import { Archive } from "@/components/Archive";
import { Collaborations } from "@/components/Collaborations";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Membership } from "@/components/Membership";
import { Signup } from "@/components/Signup";
import { Story } from "@/components/Story";
import { Values } from "@/components/Values";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Marquee />
      <Story />
      <Archive />
      <Collaborations />
      <Values />
      <Membership />
      <Signup />
      <Footer />
    </main>
  );
}
