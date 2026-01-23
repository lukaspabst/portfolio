import Hero from "@/components/sections/Hero";
import CV from "@/components/sections/CV";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import Particles from "@/components/ui/Particles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative bg-background overflow-x-hidden">
      <ThemeSwitcher />
      <Particles />
      <Hero />
      <CV />
      <Projects />
      <Contact />
    </main>
  );
}
