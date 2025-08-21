import { Button } from "@/components/ui/button";
import { Mail, Twitter, Github, Linkedin, User } from "lucide-react";
import React from "react";

const SocialLinks = () => {
  return (
    <div>
      <div className="mb-8 sm:mb-12">
        <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
          Where to find me <span className="text-white">(digitally)</span> if
          you wish to
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2"
          >
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Email Me
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2"
          >
            <Twitter className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Twitter
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2"
          >
            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2"
          >
            <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2"
          >
            <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Peerlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
