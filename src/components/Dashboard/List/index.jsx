import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { convertNumber } from "../../../functions/convertNumber";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";

function List({ coin, delay }) {
  const navigate = useNavigate();
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

  const isPositive = coin.price_change_percentage_24h >= 0;

  const handleRowClick = () => {
    navigate(`/coin/${coin.id}`);
  };

  return (
    <motion.tr
      className="group border-b border-[#1a1c21] hover:bg-[#16181d]/50 transition-all duration-200 cursor-pointer"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      onClick={handleRowClick}
    >
      {/* Coin image */}
      <Tooltip title="Coin Image">
        <td className="py-4 px-4 w-12">
          <img
            src={coin.image}
            alt={coin.name}
            className="w-9 h-9 rounded-full ring-2 ring-[#1e2028]"
          />
        </td>
      </Tooltip>

      {/* Coin name/symbol */}
      <Tooltip title="Coin Info" placement="bottom-start">
        <td className="py-4 px-2">
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm uppercase tracking-wider">
              {coin.symbol}
            </span>
            <span className="text-[#6b7280] text-xs font-medium mt-0.5">
              {coin.name}
            </span>
          </div>
        </td>
      </Tooltip>

      {/* 24h change */}
      <Tooltip title="24h Price Change" placement="bottom-start">
        <td className="py-4 px-2">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold
            ${isPositive
              ? "bg-[#61c96f]/15 text-[#61c96f]"
              : "bg-[#f94141]/15 text-[#f94141]"
            }`}>
            {isPositive
              ? <TrendingUpRoundedIcon sx={{ fontSize: "0.85rem" }} />
              : <TrendingDownRoundedIcon sx={{ fontSize: "0.85rem" }} />
            }
            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
          </span>
        </td>
      </Tooltip>

      {/* Current price */}
      <Tooltip title="Current Price (USD)" placement="bottom-end">
        <td className="py-4 px-2 font-bold text-sm text-right text-white">
          ${coin.current_price.toLocaleString()}
        </td>
      </Tooltip>

      {/* Total volume - hidden on mobile */}
      <Tooltip title="Total Volume" placement="bottom-end">
        <td className="py-4 px-2 text-[#6b7280] text-sm text-right hidden md:table-cell">
          {coin.total_volume.toLocaleString()}
        </td>
      </Tooltip>

      {/* Market cap */}
      <Tooltip title="Market Cap" placement="bottom-end">
        <td className="py-4 px-2 text-[#6b7280] text-sm text-right hidden lg:table-cell">
          ${coin.market_cap.toLocaleString()}
        </td>
      </Tooltip>

      {/* Market cap mobile */}
      <td className="py-4 px-2 text-[#6b7280] text-sm text-right lg:hidden">
        ${convertNumber(coin.market_cap)}
      </td>

      {/* Watchlist star */}
      <td className="py-4 px-4 text-right" onClick={(e) => e.stopPropagation()}>
        <button
          className={`p-1.5 rounded-full border transition-all duration-200 cursor-pointer
            ${isCoinAdded
              ? "border-yellow-500/40 text-yellow-400 bg-yellow-500/10 hover:bg-yellow-500/20"
              : "border-[#2a2d35] text-[#4b5563] hover:text-yellow-400 hover:border-yellow-500/40 bg-transparent"
            }`}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
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
      </td>
    </motion.tr>
  );
}

export default List;