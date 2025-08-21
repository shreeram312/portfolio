import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center">
        <p className="text-red-500 font-mono mb-2 text-sm sm:text-base">
          shreeram.dev
        </p>
        <p className="text-gray-400 text-xs sm:text-sm mb-1">
          That's all, folks | Designed & built with more headache...
        </p>
        <p className="text-gray-400 text-xs sm:text-sm mb-2">
          © 2025 Shreeram Barl. All rights reserved (even the bugs).
        </p>
        <p className="text-gray-400 text-xs sm:text-sm">
          Still scrolling?{" "}
          <span className="text-blue-400 underline cursor-pointer">
            Visit old portfolio (brave?)
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
