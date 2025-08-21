import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="mb-8 sm:mb-12">
        <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
          Here are some of my <span className="text-white">Projects</span>
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Web</h3>

        <div className="space-y-4 sm:space-y-6">
          <Card className="bg-gray-900 border-gray-700 p-0 overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-48 h-32 bg-gradient-to-br from-purple-600 to-pink-600 flex-shrink-0">
                <img
                  src="/pattern-craft-app.png"
                  alt="Pattern Craft"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-base sm:text-lg font-semibold">
                    Pattern Craft
                  </h4>
                  <Badge className="bg-green-600 text-white text-xs">
                    1k+ ⭐
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                </div>
                <Badge className="bg-gray-700 text-white text-xs mb-2">
                  ⚠️ backed by Vercel
                </Badge>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Copy-paste-ready backgrounds and gradients snippets for modern
                  UIs.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-900 border-gray-700 p-0 overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-48 h-32 bg-black flex-shrink-0">
                <img
                  src="/minimal-dark-interface-shii.png"
                  alt="Just Type Shii"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-base sm:text-lg font-semibold">
                    Just Type Shii
                  </h4>
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Just Type Shii - Start typing and let your thoughts flow.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-900 border-gray-700 p-0 overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-48 h-32 bg-gray-800 flex-shrink-0">
                <img
                  src="/minimal-blog-interface.png"
                  alt="Typeout Blog"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-base sm:text-lg font-semibold">
                    Typeout Blog
                  </h4>
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  A minimal blog app to share thoughts, code, and ideas with
                  ease by Shreeram.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-900 border-gray-700 p-0 overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-48 h-32 bg-gray-800 flex-shrink-0">
                <img
                  src="/roast-my-stuff-ai-feedback.png"
                  alt="Roast My Stuff"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-base sm:text-lg font-semibold">
                    Roast My Stuff
                  </h4>
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  AI-powered tool that roasts resumes and portfolios — with
                  actual feedback.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
