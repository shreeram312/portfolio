import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div>
      <div className="flex items-start gap-4 mb-6 sm:mb-8">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-blue-500 flex-shrink-0">
          <Image
            src="https://avatars.githubusercontent.com/u/126177107?v=4"
            alt="Shreeram Mutukundu"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left">
          <h1 className="text-xl sm:text-2xl font-bold mb-1">
            Shreeram Mutukundu
          </h1>
          <p className="text-blue-400 mb-2 sm:mb-4">@shreeram312</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
