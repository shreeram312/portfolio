import Header from "@/components/header";
import Profile from "@/components/profile";
import Bio from "@/components/bio";
import SocialLinks from "@/components/social-links";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import ExperienceSection from "@/components/experience";
import GithubCalendarComponent from "@/components/github-calendar";
import OpenSource from "@/components/open-source";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <Profile />

        <Bio />
        <hr className="border-gray-800 my-2 sm:my-4" />
        <SocialLinks />
        <hr className="border-gray-800 my-2 sm:my-4" />
        <GithubCalendarComponent />
        <hr className="border-gray-800 my-2 sm:my-4" />
        <Skills />
        <hr className="border-gray-800 my-2 sm:my-4" />
        <ExperienceSection />
        <hr className="border-gray-800 my-2 sm:my-4" />
        <Projects />
        <hr className="border-gray-800 my-2 sm:my-4" />
        <OpenSource />
        <hr className="border-gray-800 my-2 sm:my-4" />
        <Footer />
      </main>
    </div>
  );
}
