import React from "react";
import { ExternalLink, Github, Code, Shield } from "lucide-react";
import Link from "next/link";

const OpenSource = () => {
  return (
    <div>
      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-mono mb-2 text-white">
          Open Source
        </h2>
        <p className="text-gray-400 mb-4 sm:mb-6 font-mono text-xs sm:text-sm">
          My contributions to the community
        </p>

        <div className="space-y-6">
          {/* ContentPort.io Contribution */}
          <div className="border-l-2 border-gray-700 pl-4 sm:pl-6">
            <div className="mb-3">
              <Link href="https://contentport.io" target="_blank">
                <h3 className="text-white font-semibold text-base sm:text-lg">
                  contentport.io
                </h3>
              </Link>
              <p className="text-gray-400 text-sm sm:text-base">
                Contentport helps you create, schedule & manage twitter content
                at scale. Perfect for busy founders & content managers.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Open Source Contribution
              </p>
            </div>

            <div className="space-y-3">
              {/* Server Component & Auth */}
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Shield className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">
                    Server Component & Authentication
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Added server component functionality and fixed
                    authentication redirects. Previously, existing users were
                    forced to login again. Implemented cookie checking to
                    redirect authenticated users directly to /studio page.
                  </p>
                </div>
              </div>

              {/* Edge Case Handling */}
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Code className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">
                    Edge Case Management
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Enhanced tweet posting functionality with comprehensive edge
                    case checks. Added proper error handling and validation to
                    prevent posting failures.
                  </p>
                </div>
              </div>

              {/* UI/UX Improvements */}
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">
                    UI/UX Enhancements
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Implemented minor UI/UX improvements to enhance user
                    experience and interface consistency across the platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="https://github.com/joschan21/contentport"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                View Project on GitHub
              </a>
            </div>
          </div>
          {/* <p className="text-gray-400 text-xs sm:text-sm">
            Fun Fact: Founder & Maintainer of contentport.io is Josh Neske (
            Josh Tried Coding) ever heard of this guy? 😉👀{" "}
            <span className="text-blue-400 underline cursor-pointer">
              <Link href="https://github.com/joschan21" target="_blank">
                @joschan21
              </Link>
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
