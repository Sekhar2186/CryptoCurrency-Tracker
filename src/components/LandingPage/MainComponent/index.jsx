import React from "react";
import Button from "../../Common/Button";
import gradient from "./../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";

function MainComponent() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3a80e9]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#7c3aed]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-12 py-16">
        {/* Left: Text content */}
        <div className="flex-1 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3a80e9]/30 bg-[#3a80e9]/10 text-[#3a80e9] text-xs font-semibold mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3a80e9] animate-pulse" />
            Live Crypto Data
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black text-white leading-none mb-2 tracking-tight"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore
          </motion.h1>

          <motion.h1
            className="text-5xl md:text-7xl font-black leading-none mb-2 tracking-tight"
            style={{
              background: "linear-gradient(135deg, #3a80e9, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            Crypto
          </motion.h1>

          <motion.h1
            className="text-5xl md:text-7xl font-black text-white leading-none mb-6 tracking-tight"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Real Time.
          </motion.h1>

          <motion.p
            className="text-[#6b7280] text-base md:text-lg font-medium leading-relaxed mb-8 max-w-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
          >
            Track live crypto prices, compare assets, and stay updated with the
            latest news — all in one place.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <a href="/dashboard">
              <Button text="Go to Dashboard" />
            </a>
            <RWebShare
              data={{
                text: "CryptoDashboard — Real-time crypto tracking & news.",
                url: "https://crypto-tracker-news-website",
                title: "CryptoRadar.",
              }}
              onClick={() => toast.info("App Shared!")}
            >
              <Button text="Share App" outlined={true} />
            </RWebShare>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex gap-8 mt-12 pt-8 border-t border-[#1e2028]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            {[
              { label: "Coins Tracked", value: "100+" },
              { label: "Live Updates", value: "24/7" },
              { label: "Markets", value: "Global" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-[#6b7280] text-xs font-medium mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Phone image */}
        <div className="relative flex-shrink-0 hidden md:block">
          <img
            src={gradient}
            alt=""
            className="absolute -top-8 -right-4 w-64 opacity-70 pointer-events-none select-none"
          />
          <motion.img
            src={iphone}
            alt="CryptoRadar App Preview"
            className="relative z-10 w-72 drop-shadow-2xl select-none"
            initial={{ y: -12 }}
            animate={{ y: 12 }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              repeatType: "mirror",
              duration: 2.5,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default MainComponent;
