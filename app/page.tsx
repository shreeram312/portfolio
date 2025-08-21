import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Header from "@/components/header";
import Profile from "@/components/profile";
import Bio from "@/components/bio";
import SocialLinks from "@/components/social-links";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Projects from "@/components/projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <Profile />
        <Bio />
        <SocialLinks />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
