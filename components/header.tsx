"use client";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4   sm:p-6 text-xs sm:text-sm text-gray-400 gap-2 sm:gap-0">
        <span>IN {new Date().toLocaleTimeString()}</span>
        <span className="-mx-1 sm:-mx-0">📍Pune, India</span>
      </header>
    </div>
  );
};

export default Header;
