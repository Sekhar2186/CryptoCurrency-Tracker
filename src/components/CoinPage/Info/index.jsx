import React, { useState } from "react";

function Info({ title, desc }) {
  const [toggle, setToggle] = useState(false);

  if (!desc) return null;

  const isLong = desc.length >= 350;
  const displayText = isLong && !toggle ? desc.slice(0, 350) + "..." : desc;

  return (
    <div className="max-w-7xl mx-auto my-6 p-6 rounded-2xl bg-[#101114] border border-[#1e2028] shadow-lg">
      <h2 className="text-xl font-bold text-white mb-3 tracking-tight font-inter">
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-neutral-400 font-inter">
        <div
          dangerouslySetInnerHTML={{ __html: displayText }}
          className="[&_a]:text-[#3a80e9] [&_a]:underline [&_a:hover]:text-white [&_a]:transition-colors [&_a]:duration-200"
        />
        {isLong && (
          <button
            onClick={() => setToggle(!toggle)}
            className="mt-3 text-sm font-semibold text-[#3a80e9] hover:text-white transition-colors duration-200 cursor-pointer block"
          >
            {toggle ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Info;
