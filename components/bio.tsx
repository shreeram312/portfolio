import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

import React from "react";

const Bio = () => {
  return (
    <div>
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-gray-300 leading-relaxed text-sm sm:text-base">
        <p>
          I'm <span className="text-white font-semibold">Shreeram</span>, a Full
          Stack Engineer living in Pune, India. I love to code and make{" "}
          <span className="text-white">(break)</span> things.
        </p>

        <p>
          I love both{" "}
          <span className="text-white font-semibold">Developing Products</span>{" "}
          & <span className="text-white font-semibold">Debugging Code</span>
        </p>

        <p>
          I still write code in this{" "}
          <span className="text-white font-semibold">Vibe Code</span> era —
          yeah, I know it's not the most exciting flex, but hey,
          <span className="text-white font-semibold">
            someone's gotta keep AI from taking my job.
          </span>
        </p>

        <p>
          Let's <span className="text-white font-semibold">be real</span>: I’m
          always chasing new rabbit holes to dive into, new stuff to build, and
          maybe one day{" "}
          <span className="text-white font-semibold">my parents</span> will stop
          asking if I “fix computers for a living.”
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
        <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-4 sm:px-6 text-sm sm:text-base">
          🟢 Available for new opportunities
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
