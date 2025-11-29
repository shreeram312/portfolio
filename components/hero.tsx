"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Github, Twitter, Linkedin, Link2, Mail, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-black text-white pt-4 sm:pt-12">
      {/* Match main layout width and horizontal padding for perfect alignment */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image Container - Centered */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-6">
          <div className="relative h-[150px] sm:h-[220px] md:h-[240px] w-full">
            <Image
              src="/view.jpg"
              alt="Atmospheric mountain landscape"
              fill
              priority
              quality={100}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              style={{ objectPosition: "center" }}
            />

            {/* Vignette + corner darkening for more realistic depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_22%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.96)_100%)]" />
            {/* Subtle vertical darkening */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/80" />
            {/* Left & right edge dark patches */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />

            {/* Text overlay centered */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <p className="text-sm sm:text-md md:text-lg font-serif italic tracking-wide text-white/90 drop-shadow-2xl">
                One Commit at a Time
              </p>
            </div>
          </div>
        </div>

        {/* Profile Section - aligned with main content */}
        <div className="relative">
          {/* Profile Picture - Left aligned but within centered container */}
          <div className="absolute -top-10 sm:-top-12   ">
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 border-black bg-zinc-800 overflow-hidden shadow-2xl">
              <Image
                src="https://avatars.githubusercontent.com/u/126177107?v=4"
                alt="Shreeram Mutukundu"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="pt-12 sm:pt-14">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              {/* Name and Tagline */}
              <div>
                <h1 className="text-xl sm:text-xl md:text-3xl font-serif text-white tracking-tight mb-1">
                  Shreeram Mutukundu
                </h1>
                <p className="text-xs sm:text-sm text-gray-400 tracking-wide">
                  21 • Engineer
                </p>
              </div>

              {/* Social Links - Right aligned */}
              <div className="flex items-center gap-3 sm:gap-4 sm:pt-2 sm:mx-3">
                <Link
                  href="https://github.com/shreeram312"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://x.com/realshreeram312"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="mailto:shreerammutukundu.2003@gmail.com"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Website"
                >
                  <Mail size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shreeram-mutukundu-30094028a/"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>

            {/* Bio Section */}
            <div className="mt-4 sm:mt-6">
              <p className="text-base sm:text-md text-gray-300 leading-relaxed">
                I&apos;m Shreeram, a Software Development Engineer (SDE-1)
                @Axentia living in Pune, India.{" "}
                <span className="text-white font-semibold">
                  I love both Developing & Debugging Code
                </span>
                . Turning ideas into reality through clean code and thoughtful
                design. Building products that matter, one commit at a time.
              </p>

              {/* Action Buttons */}
              <div className="mt-2 sm:mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Available for Opportunities Button */}
                <button className="p-2 bg-green-600 text-white rounded-full font-medium text-sm sm:text-base hover:bg-green-500 transition-all duration-300 hover:scale-105 active:scale-95">
                  Available for new opportunities
                </button>

                {/* Cal.com Booking Button */}
                {/* <Link
                  href="https://cal.com/shreeram-mutukundu-se178d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 p-2 bg-white text-black rounded-full font-medium text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  <Calendar size={18} className="flex-shrink-0" />
                  <span>Book a Call</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
