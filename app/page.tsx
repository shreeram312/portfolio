import Hero from "@/components/hero";
import SocialLinks from "@/components/social-links";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import ExperienceSection from "@/components/experience";
import GithubCalendarComponent from "@/components/github-calendar";
import OpenSource from "@/components/open-source";

export const revalidate = 60;

export default function Portfolio() {
  return (
    <div className=" bg-black text-white">
      <Hero />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <GithubCalendarComponent />
        <hr className="border-gray-800 my-6 sm:my-8" />
        <Skills />
        <hr className="border-gray-800 my-6 sm:my-8" />
        <ExperienceSection />
        <hr className="border-gray-800 my-6 sm:my-8" />
        <Projects />
        <hr className="border-gray-800 my-6 sm:my-8" />
        <OpenSource />
        <hr className="border-gray-800 my-6 sm:my-8" />
        <SocialLinks />
        <hr className="border-gray-800 my-6 sm:my-8" />
        <Footer />
      </main>
    </div>
  );
}
