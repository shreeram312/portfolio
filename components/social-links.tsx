"use client";
import { Button } from "@/components/ui/button";
import { Mail, Twitter, Github, Linkedin, Code } from "lucide-react";
import React from "react";

const SocialLinks = () => {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-serif mb-2">Social Links</h2>
      <div className="mb-8 sm:mb-8">
        <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
          Where to find me <span className="text-white">(digitally)</span> if
          you wish to
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Button
            className="border border-gray-600 cursor-pointer text-gray-300 hover:shadow-[0_0_0_2px_rgba(59,130,246,0.5)] rounded-lg bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all"
            onClick={() =>
              window.open("mailto:shreerammutukundu.2003@gmail.com", "_blank")
            }
          >
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Email Me
          </Button>
          <Button
            className=" border border-gray-600 cursor-pointer text-gray-300 hover:shadow-[0_0_0_2px_rgba(34,197,94,0.5)] rounded-lg bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all"
            onClick={() =>
              window.open("https://x.com/realshreeram312", "_blank")
            }
          >
            <Twitter className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Twitter
          </Button>
          <Button
            className=" border border-gray-600 cursor-pointer text-gray-300 hover:shadow-[0_0_0_2px_rgba(34,197,94,0.5)] rounded-lg bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all"
            onClick={() =>
              window.open("https://github.com/shreeram312", "_blank")
            }
          >
            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            GitHub
          </Button>
          <Button
            className=" border border-gray-600 cursor-pointer text-gray-300 hover:shadow-[0_0_0_2px_rgba(59,130,246,0.5)] rounded-lg bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/shreeram-mutukundu-30094028a/",
                "_blank"
              )
            }
          >
            <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            LinkedIn
          </Button>
          <Button
            className="border border-gray-600 cursor-pointer text-gray-300 rounded-lg bg-transparent hover:shadow-[0_0_0_2px_rgba(251,191,36,0.5)] text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all"
            onClick={() =>
              window.open("https://leetcode.com/shreeram312", "_blank")
            }
          >
            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            LeetCode
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
