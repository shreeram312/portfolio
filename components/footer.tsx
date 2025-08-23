import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center">
        <p className="text-cyan-200 font-mono mb-2 text-sm sm:text-base">
          @shreeram312
        </p>
        <p className="text-gray-400 text-xs sm:text-sm mb-1">
          That&apos;s all, folks | Built with less headache...
        </p>
        <p className="text-gray-400 text-xs sm:text-sm mb-2">
          © 2025 Shreeram Mutukundu. All rights reserved
        </p>
        {/* <p className="text-gray-400 text-xs sm:text-sm mb-2">
          Visit Old Portfolio{" "}
          <Link href="https://shreeram.dev" target="_blank">
            <span className="text-blue-400 underline cursor-pointer">
              shreeram.dev
            </span>
          </Link>
        </p> */}
      </footer>
    </div>
  );
};

export default Footer;
