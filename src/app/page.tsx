import SectionsShell from "@/components/layout/sectionsShell";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import About from "@/components/sections/about";
import FeaturedProjects from "@/components/sections/featuredProjects";
import Hero from "@/components/sections/hero";
import Footer from "@/components/layout/footer";
/* Regola App Router: in ogni cartella sotto app/, un page.tsx diventa una route pubblica.*/
export default function Home() {
  return (
    <>
      <Hero />
      <SectionsShell>
        <About />
        <FeaturedProjects />
        <Experience />
        <Contact />
      </SectionsShell>
      <Footer />
    </>
  );
}
