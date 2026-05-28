import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
  return (
    <div className="flex justify-center items-center mb-6">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
          "&.MuiToggleButtonGroup-root": {
            backgroundColor: "#16181d !important",
            border: "1px solid #1e2028 !important",
            borderRadius: "0.75rem !important",
            p: "4px",
          },
          "& .MuiToggleButton-root": {
            color: "#9ca3af !important",
            border: "none !important",
            fontFamily: "'Inter', sans-serif",
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: "0.875rem",
            px: "1.25rem",
            py: "0.5rem",
            borderRadius: "0.5rem !important",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.03)",
              color: "#ffffff !important",
            },
            "&.Mui-selected": {
              backgroundColor: "#3a80e9 !important",
              color: "#ffffff !important",
              boxShadow: "0 0 12px rgba(58,128,233,0.3)",
            },
          },
        }}
      >
        <ToggleButton value="prices">Price</ToggleButton>
        <ToggleButton value="market_caps">Market Cap</ToggleButton>
        <ToggleButton value="total_volumes">Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
