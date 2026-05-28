import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";
import LogoutButton from "../../auth/logOut";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") != "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "Compare", href: "/compare" },
    { label: "Watchlist", href: "/watchlist" },
    { label: "News", href: "/news" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <div>
      <IconButton onClick={() => setOpen(true)} sx={{ color: "#9ca3af" }}>
        <MenuRoundedIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="w-64 h-full bg-[#0d0f12] border-l border-[#1e2028] flex flex-col p-6 gap-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#3a80e9] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
              </svg>
            </div>
            <span className="text-white font-bold text-base">CryptoRadar<span className="text-[#3a80e9]">.</span></span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#9ca3af] hover:text-white font-semibold text-sm py-2.5 px-3 rounded-lg hover:bg-[#1e2028] transition-all duration-200"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4 pt-4 border-t border-[#1e2028] flex items-center justify-between">
            <span className="text-[#6b7280] text-xs font-medium">Dark Mode</span>
            <Switch checked={darkMode} onClick={() => changeMode()} size="small" />
          </div>

          <div className="mt-2">
            <LogoutButton />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
