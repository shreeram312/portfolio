import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

import React from "react";

export const revalidate = 60;

const Bio = () => {
  return (
    <div>
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-gray-300 leading-relaxed text-sm sm:text-base">
        <p>
          I'm <span className="text-white font-semibold">Shreeram</span>, a
          Software Devlopment Engineer(SDE-1){" "}
          <a
            href="https://axentia.in"
            className="text-white font-semibold"
            target="_blank"
          >
            @Axentia
          </a>{" "}
          living in Pune, India.
        </p>

        <p>
          I love both{" "}
          <span className="text-white font-semibold">Developing</span> &{" "}
          <span className="text-white font-semibold">Debugging Code</span>
        </p>

        <p>
          I still code with my bare hands in this{" "}
          <span className="text-white font-semibold">"Vibe Code"</span> era —
          yeah, I know it’s not the flashiest flex, but hey,
          <br />
          <span className="text-white font-semibold">
            someone’s gotta keep AI from taking my job. I still use AI for the
            repetitive stuff 😉
          </span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 mb-2 sm:mb-7">
        <Button className="bg-green-600 hover:bg-green-500 text-white rounded-full px-4 sm:px-6 text-sm sm:text-base animate-bounce">
          Available for new opportunities
        </Button>
        {/* <Button
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-800 rounded-full px-4 sm:px-6 bg-transparent text-sm sm:text-base"
        >
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </Button> */}
      </div>
    </div>
  );
};

export default Bio;
