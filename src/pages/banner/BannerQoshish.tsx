import React from "react";

function BannerQoshish() {
  return (
    <div className="relative bg-[url('./src/assets/gtr.webp')] bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 space-y-6">
        <h1 className="text-white text-5xl font-extrabold drop-shadow-xl tracking-wide">
          Nissan GT-R
        </h1>

        <h2 className="text-yellow-400 text-2xl font-semibold drop-shadow-md">
          Nickname: “Godzilla”
        </h2>

        <button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 
                     text-white font-semibold rounded-xl text-lg shadow-lg 
                     hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
        >
          Give More Information
        </button>
      </div>
    </div>
  );
}

export default BannerQoshish;
