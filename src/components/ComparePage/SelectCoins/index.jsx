import { MenuItem, Select } from "@mui/material";
import React from "react";
import SelectDays from "../../CoinPage/SelectDays";

function SelectCoins({
  allCoins,
  crypto1,
  crypto2,
  onCoinChange,
  days,
  handleDaysChange,
}) {
  const selectStyle = {
    height: "2.5rem",
    color: "#ffffff",
    backgroundColor: "#16181d",
    borderRadius: "0.75rem",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 500,
    minWidth: "140px",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#1e2028",
      borderRadius: "0.75rem",
      transition: "all 0.2s",
    },
    "& .MuiSvgIcon-root": {
      color: "#9ca3af",
    },
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3a80e9",
      },
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3a80e9",
        borderWidth: "1px",
      },
    },
  };

  const menuProps = {
    PaperProps: {
      sx: {
        backgroundColor: "#101114",
        border: "1px solid #1e2028",
        borderRadius: "0.75rem",
        maxHeight: "300px",
        "& .MuiMenuItem-root": {
          color: "#9ca3af",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.875rem",
          "&:hover": {
            backgroundColor: "#1e2028",
            color: "#ffffff",
          },
          "&.Mui-selected": {
            backgroundColor: "#3a80e9",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#3a80e9",
            },
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-wrap items-center gap-6 px-6 md:px-12 py-6 bg-[#101114]/50 border-b border-[#1e2028]">
      <div className="flex items-center gap-3">
        <p className="text-sm font-semibold text-neutral-400 font-inter">
          Crypto 1
        </p>
        <Select
          value={crypto1}
          onChange={(e) => onCoinChange(e, false)}
          sx={selectStyle}
          MenuProps={menuProps}
        >
          {allCoins
            .filter((coin) => coin.id !== crypto2)
            .map((coin, i) => (
              <MenuItem value={coin.id} key={i}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-sm font-semibold text-neutral-400 font-inter">
          Crypto 2
        </p>
        <Select
          value={crypto2}
          onChange={(e) => onCoinChange(e, true)}
          sx={selectStyle}
          MenuProps={menuProps}
        >
          {allCoins
            .filter((coin) => coin.id !== crypto1)
            .map((coin, i) => (
              <MenuItem value={coin.id} key={i}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>

      <div className="flex-1 min-w-[200px]">
        <SelectDays
          days={days}
          handleDaysChange={handleDaysChange}
          noPTag={true}
        />
      </div>
    </div>
  );
}

export default SelectCoins;
