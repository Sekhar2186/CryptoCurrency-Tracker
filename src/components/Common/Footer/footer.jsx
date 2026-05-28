import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <footer className="mt-12 border-t border-[#1e2028] bg-[#0a0b0d]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <button
          onClick={topFunction}
          className="flex items-center gap-2 cursor-pointer bg-transparent border-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#3a80e9] flex items-center justify-center shadow-[0_0_14px_rgba(58,128,233,0.4)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
            </svg>
          </div>
          <span className="text-white font-bold text-base">
            CryptoRadar<span className="text-[#3a80e9]">.</span>
          </span>
        </button>

        <p className="text-[#4b5563] text-sm text-center">
          © {new Date().getFullYear()} CryptoRadar. Real-time crypto tracking & news.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {[
            { href: "https://facebook.com", icon: <FacebookIcon fontSize="small" /> },
            { href: "mailto:cs23b1040@iiitr.ac.in", icon: <EmailIcon fontSize="small" /> },
            { href: "https://twitter.com", icon: <TwitterIcon fontSize="small" /> },
            { href: "https://www.instagram.com/kurapatisomasekhar/?hl=en", icon: <InstagramIcon fontSize="small" /> },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#1e2028] text-[#6b7280] hover:text-[#3a80e9] hover:border-[#3a80e9] hover:shadow-[0_0_12px_rgba(58,128,233,0.3)] transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
