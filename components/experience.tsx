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

        <div className="space-y-8">
          {/* AXENTIA - Threaded roles */}
          <div>
            <div className="mb-3">
              <Link href="https://axentia.in" target="_blank">
                <div className="flex items-center gap-2">
                  <Image
                    src="/axentia.png"
                    alt="Axentia Logo"
                    width={32}
                    height={32}
                    className="rounded-sm border border-gray-600"
                  />
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    Axentia
                  </h3>
                </div>
              </Link>
              <p className="text-gray-500 text-xs sm:text-sm">
                Total: {calculateWorkingMonths()} (Dec 2024 - Present)
              </p>
            </div>

            {/* Timeline / thread */}
            <div className="relative pl-8">
              {/* vertical line */}
              <div className="absolute left-3 top-0 h-full w-px bg-gray-700"></div>

              {/* Full-time (current) */}
              <div className="relative pb-8">
                {/* dot */}

                <div className="mb-3">
                  <p className="text-cyan-400 font-medium text-sm sm:text-base">
                    Software Development Engineer (SDE-1)
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Currently Working
                  </p>
                </div>

                <ul className="text-gray-300 text-sm sm:text-base space-y-1 sm:space-y-2 ml-2">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>
                      Built RiskAssist end-to-end — an AI-powered compliance
                      SaaS for CISOs and InfoSec teams.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>
                      Implemented RAG pipelines with custom-ingested vector DBs
                      for frameworks like NIST, ISO, HIPAA, and SOC.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>
                      Integrated BlockNote editor for AI-assisted policy
                      drafting, live editing, versioning, and exports.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>
                      Built Stripe credit-based payment system, Supabase auth,
                      and PostgreSQL backend with Prisma ORM.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Internship (previous) */}
              <div className="relative">
                {/* dot */}

                <div className="mb-3">
                  <p className="text-cyan-300/70 font-medium text-sm sm:text-base">
                    Full Stack Developer(AI) Intern
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Jan 2025 - July 2025 • 6 months
                  </p>
                </div>

                <ul className="text-gray-300 text-sm sm:text-base space-y-1 sm:space-y-2 ml-2">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>
                      Built G.R.E.G end-to-end — an AI SaaS platform for
                      immigration law firms with client dashboards.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>
                      Delivered RAG-powered case summarization, visa
                      comparisons, AI-assisted drafting, and contextual chat.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>
                      Integrated Supabase (auth + storage), PostgreSQL (via
                      Prisma), LangChain pipelines, and Stripe subscriptions.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Previous company example (optional) */}
          <div className="border-l-2 border-gray-700 pl-4 sm:pl-6">
            <div className="mb-2">
              <h3 className="text-cyan-300/70 font-semibold text-base sm:text-lg">
                Frontend Developer Intern
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                DigiMedia Solutions
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">4 months</p>
            </div>
            <ul className="text-gray-300 text-sm sm:text-base space-y-1 sm:space-y-2 ml-2">
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>
                  Built a car rental service frontend in React with a
                  responsive, modern UI.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>
                  Developed reusable components for booking flows, listings, and
                  filters.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>
                  Managed global and local state for seamless navigation and
                  user interactions.
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
