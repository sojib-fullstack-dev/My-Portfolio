
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioShowcase />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
