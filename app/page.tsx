import { SiteHeader } from "@/components/site-header";
import { MobileDock } from "@/components/mobile-dock";
import { Frame } from "@/components/frame";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { OpenSource } from "@/components/open-source";
import { Skills } from "@/components/skills";
import { GithubActivity } from "@/components/github-calendar";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export const revalidate = 60;

export default function Portfolio() {
  return (
    <>
      <SiteHeader />
      <Frame>
        <main className="pt-14">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <OpenSource />
          <Skills />
          <GithubActivity />
          <Cta />
          <Footer />
        </main>
      </Frame>
      <MobileDock />
    </>
  );
}
