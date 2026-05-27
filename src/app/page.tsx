import { BrandMessage } from "@/components/BrandMessage";
import { Collaborations } from "@/components/Collaborations";
import { Collection } from "@/components/Collection";
import { Concept } from "@/components/Concept";
import { Episodes } from "@/components/Episodes";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Membership } from "@/components/Membership";
import { Signup } from "@/components/Signup";
import { Values } from "@/components/Values";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Marquee />
      <BrandMessage />
      <Concept />
      <Episodes />
      <Collection />
      <Collaborations />
      <Values />
      <Membership />
      <Signup />
      <Footer />
    </main>
  );
}
