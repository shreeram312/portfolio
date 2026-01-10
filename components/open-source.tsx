import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

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

        <Card className="bg-black border border-gray-800 p-0 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/50">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Image Section */}
            <Link
              href="https://contentport.io"
              target="_blank"
              className="lg:col-span-2"
            >
              <div className="relative w-full h-48 sm:h-56 lg:h-full bg-gray-900 overflow-hidden group">
                <Image
                  src="/image.png"
                  alt="Contentport.io"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </Link>

            {/* Content Section */}
            <div className="lg:col-span-3 p-5 sm:p-6">
              <div className="mb-4">
                <Link href="https://contentport.io" target="_blank">
                  <h3 className="text-gray-100 font-mono font-medium text-lg sm:text-xl hover:text-blue-300 transition-colors mb-2">
                    contentport.io
                  </h3>
                </Link>
                <p className="text-gray-400 text-xs sm:text-sm mb-3">
                  A content engine for growing on Twitter. Helps you create,
                  schedule and manage twitter content at scale.
                </p>
                <p className="text-gray-500 text-xs font-mono">
                  Open Source Contribution
                </p>
              </div>

              {/* Contributions List */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 text-xs mt-1">•</span>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Added server component functionality and fixed
                    authentication redirects for seamless user experience
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-gray-400 text-xs mt-1">•</span>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Enhanced tweet posting with comprehensive edge case handling
                    and error validation
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-gray-400 text-xs mt-1">•</span>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Implemented UI/UX improvements for better interface
                    consistency
                  </p>
                </div>
              </div>

              {/* GitHub Link */}
              <a
                href="https://github.com/joschan21/contentport"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-mono"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OpenSource;
