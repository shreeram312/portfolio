import { Badge } from "@/components/ui/badge";
import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-serif mb-2">Skills</h2>
        <p className="text-gray-400 mb-4 sm:mb-6 font-mono text-xs sm:text-sm">
          Which I use/know
        </p>

        <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
          These are the technologies I've learned and worked with. This list is
          constantly evolving as I continue to learn and grow as a developer.
        </p>

        {/* LANGUAGES */}
        <div className="mb-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2 font-mono">
            {"< LANGUAGES />"}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#1a1a1a] text-blue-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/typescript.png" alt="TS" className="w-6 h-4" />
              TypeScript
            </Badge>
            <Badge className="bg-[#1a1a1a] text-yellow-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/javascript.png" alt="JS" className="w-4 h-4" />
              JavaScript
            </Badge>
            <Badge className="bg-[#1a1a1a] text-orange-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/python.png" alt="Python" className="w-4 h-4" />
              Python
            </Badge>
            <Badge className="bg-[#1a1a1a] text-white flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/java.png" alt="Java" className="w-4 h-4" />
              Java
            </Badge>
          </div>
        </div>

        {/* FRONTEND */}
        <div className="mb-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2 font-mono">
            {"< FRONTEND />"}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#1a1a1a] text-cyan-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/react.png" alt="React" className="w-4 h-4" />
              React
            </Badge>
            <Badge className="bg-[#1a1a1a] text-white flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/nextjs.png" alt="Next.js" className="w-4 h-4" />
              Next.js
            </Badge>
            <Badge className="bg-[#1a1a1a] text-teal-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/tailwind.png" alt="TailwindCSS" className="w-4 h-4" />
              TailwindCSS
            </Badge>
            <Badge className="bg-[#1a1a1a] text-red-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/tanstack.png" alt="TanStack" className="w-4 h-4" />
              TanStack Query
            </Badge>
          </div>
        </div>

        {/* BACKEND */}
        <div className="mb-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2 font-mono">
            {"< BACKEND />"}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#1a1a1a] text-green-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/nodejs.png" alt="Node.js" className="w-6 h-4" />
              Node.js
            </Badge>
            <Badge className="bg-[#1a1a1a] text-yellow-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/express.png" alt="Express" className="w-4 h-4" />
              Express.js
            </Badge>
            <Badge className="bg-[#1a1a1a] text-red-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/nest.png" alt="NestJS" className="w-4 h-4" />
              NestJS
            </Badge>
          </div>
        </div>

        {/* DATABASE & ORM */}
        <div className="mb-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2 font-mono">
            {"< DATABASE & ORM />"}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#1a1a1a] text-green-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/mongo.jpg" alt="MongoDB" className="w-4 h-4" />
              MongoDB
            </Badge>
            <Badge className="bg-[#1a1a1a] text-blue-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/postgresql.png" alt="PostgreSQL" className="w-4 h-4" />
              PostgreSQL
            </Badge>
            <Badge className="bg-[#1a1a1a] text-purple-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/prisma.png" alt="Prisma" className="w-4 h-4" />
              Prisma
            </Badge>
          </div>
        </div>

        {/* AI */}
        <div className="mb-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2 font-mono">
            {"< AI />"}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#1a1a1a] text-white flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/aisdk.png" alt="ai-sdk" className="w-4 h-4" />
              AI-SDK
            </Badge>
          </div>
        </div>
        {/* DEVOPS */}
        <div className="mb-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2 font-mono">
            {"< DEVOPS & Tools />"}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#1a1a1a] text-blue-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/docker.png" alt="Docker" className="w-4 h-4" />
              Docker
            </Badge>
            <Badge className="bg-[#1a1a1a] text-green-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/linux.jpg" alt="Linux" className="w-4 h-4" />
              Linux
            </Badge>
            <Badge className="bg-[#1a1a1a] text-orange-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/git.png" alt="Git" className="w-4 h-4" />
              Git
            </Badge>

            <Badge className="bg-[#1a1a1a] text-white flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/postman.png" alt="Postman    " className="w-4 h-4" />
              Postman
            </Badge>
            <Badge className="bg-[#1a1a1a] text-white flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/vercel.png" alt="Vercel" className="w-4 h-4" />
              Vercel
            </Badge>
          </div>
        </div>

        {/* PAYMENT GATEWAY */}
        <div className="mb-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2 font-mono">
            {"< PAYMENT GATEWAY />"}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#1a1a1a] text-purple-400 flex items-center gap-2 px-3 py-2 text-sm">
              <img src="/stripe.png" alt="Stripe" className="w-4 h-4" />
              Stripe
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
