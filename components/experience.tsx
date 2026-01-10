import Link from "next/link";
import Image from "next/image";
import React from "react";

const ExperienceSection = () => {
  // Function to calculate working months from December 2024 to current month
  const calculateWorkingMonths = () => {
    const startDate = new Date("2024-12-01");
    const currentDate = new Date();

    const yearDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthDiff = currentDate.getMonth() - startDate.getMonth();

    const totalMonths = yearDiff * 12 + monthDiff;

    if (totalMonths === 0) {
      return "1 month";
    } else if (totalMonths === 1) {
      return "1 month";
    } else {
      return `${totalMonths} months`;
    }
  };

  return (
    <div>
      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-mono mb-2">Experience</h2>
        <p className="text-gray-400 mb-4 sm:mb-6 font-mono text-xs sm:text-sm">
          My professional journey
        </p>

        <div className="space-y-6">
          {/* AXENTIA - Threaded roles */}
          <div className="relative border-l-2 border-gray-800 pl-5 sm:pl-6">
            {/* Start dot */}
            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-cyan-400 border-2 border-black"></div>
            {/* End dot */}
            <div className="absolute -left-[5px] bottom-0 w-2 h-2 rounded-full bg-gray-600 border-2 border-black"></div>

            <div className="mb-4">
              <Link href="https://axentia.in" target="_blank">
                <div className="flex items-center gap-2 group">
                  <Image
                    src="/axentia.png"
                    alt="Axentia Logo"
                    width={28}
                    height={28}
                    className="rounded border border-gray-700 group-hover:border-gray-600 transition-colors"
                  />
                  <h3 className="text-white font-mono font-medium text-base sm:text-lg group-hover:text-cyan-400 transition-colors">
                    Axentia
                  </h3>
                </div>
              </Link>
              <p className="text-gray-500 text-xs font-mono mt-1">
                {calculateWorkingMonths()} • Dec 2024 - Present
              </p>
            </div>

            {/* Full-time (current) */}
            <div className="mb-5">
              <div className="mb-2">
                <p className="text-cyan-400 font-mono font-medium text-sm">
                  Software Development Engineer (SDE-1)
                </p>
                <p className="text-gray-500 text-xs font-mono">
                  Currently Working
                </p>
              </div>

              <ul className="text-gray-300 text-xs sm:text-sm space-y-1 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2 mt-0.5">•</span>
                  <span>
                    Built RiskAssist end-to-end — an AI-powered compliance SaaS
                    for CISOs and InfoSec teams
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2 mt-0.5">•</span>
                  <span>
                    Implemented RAG pipelines with custom-ingested vector DBs
                    for frameworks like NIST, ISO, HIPAA, and SOC
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2 mt-0.5">•</span>
                  <span>
                    Integrated BlockNote editor for AI-assisted policy drafting,
                    live editing, versioning, and exports
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2 mt-0.5">•</span>
                  <span>
                    Built Stripe credit-based payment system, Supabase auth, and
                    PostgreSQL backend with Prisma ORM
                  </span>
                </li>
              </ul>
            </div>

            {/* Internship (previous) */}
            <div className="pt-3 border-t border-gray-800">
              <div className="mb-2">
                <p className="text-cyan-300/70 font-mono font-medium text-sm">
                  Full Stack Developer (AI) Intern
                </p>
                <p className="text-gray-500 text-xs font-mono">
                  Dec 2024 - May 2025 • 6 months
                </p>
              </div>

              <ul className="text-gray-300 text-xs sm:text-sm space-y-1 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2 mt-0.5">•</span>
                  <span>
                    Built G.R.E.G end-to-end — an AI SaaS platform for
                    immigration law firms with client dashboards
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2 mt-0.5">•</span>
                  <span>
                    Delivered RAG-powered case summarization, visa comparisons,
                    AI-assisted drafting, and contextual chat
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2 mt-0.5">•</span>
                  <span>
                    Integrated Supabase (auth + storage), PostgreSQL (via
                    Prisma), LangChain pipelines, and Stripe subscriptions
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Previous company */}
          <div className="relative border-l-2 border-gray-800 pl-5 sm:pl-6">
            {/* Start dot */}
            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-cyan-300/70 border-2 border-black"></div>
            {/* End dot */}
            <div className="absolute -left-[5px] bottom-0 w-2 h-2 rounded-full bg-gray-600 border-2 border-black"></div>

            <div className="mb-2">
              <h3 className="text-cyan-300/70 font-mono font-medium text-sm sm:text-base">
                Frontend Developer Intern
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm font-mono">
                DigiMedia Solutions
              </p>
              <p className="text-gray-500 text-xs font-mono">4 months</p>
            </div>
            <ul className="text-gray-300 text-xs sm:text-sm space-y-1 leading-relaxed">
              <li className="flex items-start">
                <span className="text-gray-500 mr-2 mt-0.5">•</span>
                <span>
                  Built a car rental service frontend in React with a
                  responsive, modern UI
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2 mt-0.5">•</span>
                <span>
                  Developed reusable components for booking flows, listings, and
                  filters
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2 mt-0.5">•</span>
                <span>
                  Managed global and local state for seamless navigation and
                  user interactions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
