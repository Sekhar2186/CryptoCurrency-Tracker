import { MenuItem, Select } from "@mui/material";
import React from "react";

function SelectDays({ days, handleDaysChange, noPTag }) {
  const selectStyle = {
    height: "2.5rem",
    color: "#ffffff",
    backgroundColor: "#16181d",
    borderRadius: "0.75rem",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 500,
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

  return (
    <div 
      className="flex items-center gap-3 flex-wrap" 
      style={{ marginBottom: noPTag ? "0" : "1.5rem" }}
    >
      {!noPTag && (
        <p className="text-sm font-semibold text-neutral-400 font-inter">
          Price change in
        </p>
      )}
      <Select
        value={days}
        onChange={(e) => handleDaysChange(e)}
        sx={selectStyle}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "#101114",
              border: "1px solid #1e2028",
              borderRadius: "0.75rem",
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
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}

export default SelectDays;
