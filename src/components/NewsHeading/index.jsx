import React from "react";

function NewsHeading() {
  return (
    <div className="max-w-7xl mx-auto my-8 px-6 py-10 rounded-2xl bg-[#101114] border border-[#1e2028] shadow-lg relative overflow-hidden group">
      {/* Subtle ambient glow inside the header */}
      <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#3a80e9]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#3a80e9]/20 transition-all duration-700" />
      <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-[#7c3aed]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#7c3aed]/20 transition-all duration-700" />
      
      <div className="relative z-10 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#3a80e9] bg-[#3a80e9]/10 px-3 py-1 rounded-full font-inter">
          Market Intelligence
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-white mt-4 tracking-tight font-inter">
          Latest Crypto <span className="text-[#3a80e9]">News</span>
        </h1>
        <p className="text-neutral-400 text-sm mt-2 max-w-xl font-inter">
          Stay up to date with the latest market trends, news bulletins, and regulatory shifts in the blockchain space.
        </p>
      </div>
    </div>
  );
}

export default NewsHeading;
