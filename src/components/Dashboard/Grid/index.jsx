import React, { useState } from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion } from "framer-motion";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";

function Grid({ coin, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <a href={`/coin/${coin.id}`} className="block">
      <motion.div
        className={`relative rounded-2xl p-5 border transition-all duration-300 cursor-pointer group overflow-hidden
          ${isPositive
            ? "bg-[#101114] border-[#1e2028] hover:border-[#61c96f]/40 hover:shadow-[0_0_28px_rgba(97,201,111,0.12)]"
            : "bg-[#101114] border-[#1e2028] hover:border-[#f94141]/40 hover:shadow-[0_0_28px_rgba(249,65,65,0.12)]"
          }`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Subtle background gradient */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl
          ${isPositive
            ? "bg-gradient-to-br from-[#61c96f]/5 to-transparent"
            : "bg-gradient-to-br from-[#f94141]/5 to-transparent"
          }`}
        />

        {/* Top row: coin info + watchlist */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={coin.image}
              alt={coin.name}
              className="w-10 h-10 rounded-full ring-2 ring-[#1e2028]"
            />
            <div>
              <p className="text-white font-bold text-sm uppercase tracking-wider leading-none">
                {coin.symbol}
              </p>
              <p className="text-[#6b7280] text-xs mt-0.5 font-medium truncate max-w-[100px]">
                {coin.name}
              </p>
            </div>
          </div>

          {/* Watchlist star */}
          <button
            className={`p-1.5 rounded-full border transition-all duration-200 cursor-pointer
              ${isCoinAdded
                ? "border-yellow-500/40 text-yellow-400 bg-yellow-500/10 hover:bg-yellow-500/20"
                : "border-[#2a2d35] text-[#4b5563] hover:text-yellow-400 hover:border-yellow-500/40 bg-transparent"
              }`}
            onClick={(e) => {
              if (isCoinAdded) {
                removeItemToWatchlist(e, coin.id, setIsCoinAdded);
              } else {
                setIsCoinAdded(true);
                saveItemToWatchlist(e, coin.id);
              }
            }}
          >
            {isCoinAdded
              ? <StarIcon sx={{ fontSize: "1rem" }} />
              : <StarOutlineIcon sx={{ fontSize: "1rem" }} />
            }
          </button>
        </div>

        {/* Price */}
        <p className={`text-2xl font-bold mb-3 ${isPositive ? "text-white" : "text-white"}`}>
          ${coin.current_price.toLocaleString()}
        </p>

        {/* Percentage chip */}
        <div className="flex items-center gap-2 mb-4">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold
            ${isPositive
              ? "bg-[#61c96f]/15 text-[#61c96f]"
              : "bg-[#f94141]/15 text-[#f94141]"
            }`}>
            {isPositive
              ? <TrendingUpRoundedIcon sx={{ fontSize: "0.9rem" }} />
              : <TrendingDownRoundedIcon sx={{ fontSize: "0.9rem" }} />
            }
            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
          </span>
          <span className="text-[#4b5563] text-xs">24h</span>
        </div>

        {/* Stats */}
        <div className="space-y-2 pt-3 border-t border-[#1e2028]">
          <div className="flex justify-between items-center">
            <span className="text-[#4b5563] text-xs">Volume</span>
            <span className="text-[#9ca3af] text-xs font-medium">
              {coin.total_volume.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#4b5563] text-xs">Market Cap</span>
            <span className="text-[#9ca3af] text-xs font-medium">
              ${coin.market_cap.toLocaleString()}
            </span>
          </div>
        </div>
      </motion.div>
    </a>
  );
}

export default Grid;