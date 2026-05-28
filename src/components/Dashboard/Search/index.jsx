import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search({ search, handleChange }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 bg-[#101114] border border-[#1e2028] rounded-2xl px-4 py-3 focus-within:border-[#3a80e9] focus-within:shadow-[0_0_0_3px_rgba(58,128,233,0.15)] transition-all duration-300">
        <SearchIcon sx={{ color: "#4b5563", fontSize: "1.2rem" }} />
        <input
          className="flex-1 bg-transparent text-white text-sm placeholder-[#4b5563] outline-none font-medium"
          placeholder="Search coins by name or symbol..."
          value={search}
          onChange={(e) => handleChange(e)}
        />
        {search && (
          <span className="text-xs text-[#6b7280] bg-[#1e2028] px-2 py-0.5 rounded-lg">
            {search}
          </span>
        )}
      </div>
    </div>
  );
}

export default Search;
