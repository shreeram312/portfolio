import { Badge } from "@/components/ui/badge";
import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-mono mb-2">Skills</h2>
        <p className="text-gray-400 mb-4 sm:mb-6 font-mono text-xs sm:text-sm">
          Which I use/know
        </p>

        <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
          These are the technologies I've learned and worked with. This list is
          constantly evolving as I continue to learn and grow as a developer.
        </p>

        <div className="mb-4 sm:mb-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-mono">
            {"< LANGUAGES />"}
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <Badge className="bg-gray-800 text-yellow-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              <span className="text-yellow-400 mr-1">JS</span> JavaScript
            </Badge>
            <Badge className="bg-gray-800 text-blue-400 hover:bg-gray-700 border-2 border-red-500 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              <span className="text-blue-400 mr-1">TS</span> TypeScript
            </Badge>
            <Badge className="bg-gray-800 text-blue-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              <span className="text-blue-400 mr-1">C</span> C
            </Badge>
            <Badge className="bg-gray-800 text-blue-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              <span className="text-blue-400 mr-1">C++</span> C++
            </Badge>
            <Badge className="bg-gray-800 text-orange-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              HTML
            </Badge>
            <Badge className="bg-gray-800 text-blue-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              CSS
            </Badge>
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-mono">
            {"< FRAMEWORKS / LIBRARIES />"}
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <Badge className="bg-gray-800 text-cyan-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              React
            </Badge>
            <Badge className="bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              <span className="mr-1">N</span> Next.js
            </Badge>
            <Badge className="bg-gray-800 text-yellow-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              <span className="mr-1">EX</span> Express.js
            </Badge>
            <Badge className="bg-gray-800 text-teal-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              TailwindCSS
            </Badge>
            <Badge className="bg-gray-800 text-red-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              TanStack Query
            </Badge>
            <Badge className="bg-gray-800 text-blue-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              Framer Motion
            </Badge>
            <Badge className="bg-gray-800 text-green-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              GSAP
            </Badge>
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-mono">
            {"< BACKEND & RUNTIME />"}
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <Badge className="bg-gray-800 text-green-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              Node.js
            </Badge>
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-mono">
            {"< DATABASE />"}
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <Badge className="bg-gray-800 text-green-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              MongoDB
            </Badge>
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-mono">
            {"< DEVELOPER TOOLS />"}
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <Badge className="bg-gray-800 text-orange-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              Git
            </Badge>
            <Badge className="bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              GitHub
            </Badge>
            <Badge className="bg-gray-800 text-blue-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              VS Code
            </Badge>
            <Badge className="bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              Vercel
            </Badge>
            <Badge className="bg-gray-800 text-orange-400 hover:bg-gray-700 border border-gray-600 px-2 sm:px-3 py-1 text-xs sm:text-sm">
              Postman
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
