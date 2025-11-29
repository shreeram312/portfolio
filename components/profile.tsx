import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Code } from "lucide-react";

const Profile = () => {
  return (
    <div className="relative z-10">
      {/* Card container to match Hero width/style */}
      <div className="rounded-b-xl border-x border-b border-white/10 bg-[#0a0a0a] px-6 pb-8 pt-0 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          {/* Avatar - overlaps the hero image */}
          <div className="relative -mt-12 sm:-mt-16 mb-4 sm:mb-0">
            <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full border-[6px] border-[#0a0a0a] bg-zinc-800 overflow-hidden relative z-10">
              <Image
                src="https://avatars.githubusercontent.com/u/126177107?v=4"
                alt="Shreeram Mutukundu"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 sm:mt-6 sm:mr-2">
            <Link
              href="https://github.com/shreeram312"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://x.com/realshreeram312"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shreeram-mutukundu-30094028a/"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:shreerammutukundu.2003@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </Link>
            <Link
              href="https://leetcode.com/shreeram312"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Code size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-2 sm:mt-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Shreeram Mutukundu
          </h1>
          <p className="text-sm text-gray-400 mt-1 font-mono">
            21 • engineer • developer • builder
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white/5 border-dashed" />

        {/* Short Bio from Reference Style */}
        <div className="text-gray-300 leading-relaxed space-y-4 text-sm sm:text-base">
          <p>
            I <span className="text-white font-semibold">build from zero</span>.
            Whether it&apos;s frontend, backend, full-stack applications, or
            AI-powered experiences, I work across the entire development
            lifecycle. From UI/UX to deployment to user feedback, I care less
            about technology debates and more about delivering results that
            people love using.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
