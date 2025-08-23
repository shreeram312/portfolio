import React from "react";

const ExperienceSection = () => {
  return (
    <div>
      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-mono mb-2">Experience</h2>
        <p className="text-gray-400 mb-4 sm:mb-6 font-mono text-xs sm:text-sm">
          My professional journey
        </p>

        <div className="space-y-8">
          {/* AXENTIA - Threaded roles */}
          <div>
            <div className="mb-3">
              <h3 className="text-white font-semibold text-base sm:text-lg">
                Axentia
              </h3>
            </div>

            {/* Timeline / thread */}
            <div className="relative pl-8">
              {/* vertical line */}
              <div className="absolute left-3 top-0 h-full w-px bg-gray-700"></div>

              {/* Full-time (current) */}
              <div className="relative pb-8">
                {/* dot */}

                <div className="mb-3">
                  <p className="text-white font-medium text-sm sm:text-base">
                    Software Development Engineer • Full-time
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Currently Working
                  </p>
                </div>

                <ul className="text-gray-300 text-sm sm:text-base space-y-1 sm:space-y-2 ml-2">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>
                      Building and maintaining production web apps end-to-end.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>
                      Collaborating cross-functionally to ship features quickly
                      and safely.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Internship (previous) */}
              <div className="relative">
                {/* dot */}

                <div className="mb-3">
                  <p className="text-white font-medium text-sm sm:text-base">
                    Software Development Engineer Intern
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Jan 2025 - July 2025 • 6 months
                  </p>
                </div>

                <ul className="text-gray-300 text-sm sm:text-base space-y-1 sm:space-y-2 ml-2">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>
                      Built responsive UIs and contributed to core features.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>
                      Improved performance and DX through targeted refactors.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Previous company example (optional) */}
          <div className="border-l-2 border-gray-700 pl-4 sm:pl-6">
            <div className="mb-2">
              <h3 className="text-white font-semibold text-base sm:text-lg">
                Frontend Developer Intern
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                DigiMedia Solutions
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">4 months</p>
            </div>
            <ul className="text-gray-300 text-sm sm:text-base space-y-1 sm:space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>
                  Built responsive UIs and implemented modern design patterns.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Optimized performance and improved UX.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
