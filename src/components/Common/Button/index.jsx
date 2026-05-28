import React from "react";

function Button({ text, onClick, outlined }) {
  return (
    <button
      className={
        outlined
          ? "px-5 py-2 rounded-full font-semibold text-sm border-2 border-[#3a80e9] text-white bg-transparent hover:bg-[#3a80e9] transition-all duration-300 cursor-pointer min-w-[90px]"
          : "px-5 py-2 rounded-full font-semibold text-sm bg-[#3a80e9] border-2 border-[#3a80e9] text-white hover:shadow-[0_0_18px_rgba(58,128,233,0.55)] hover:scale-[1.04] transition-all duration-300 cursor-pointer min-w-[90px]"
      }
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  );
}

export default Button;
