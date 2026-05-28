import React, { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import { get100Coins } from "../functions/get100Coins";

function Watchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (watchlist) {
      getData();
    }
  }, []);

  const getData = async () => {
    const allCoins = await get100Coins();
    if (allCoins) {
      setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
    }
  };

  return (
    <div className="min-h-screen bg-[#08090a]">
      <Header />

      {watchlist?.length > 0 ? (
        <>
          <div className="max-w-7xl mx-auto px-4 pt-10 pb-2">
            <h1 className="text-3xl font-black text-white mb-1">
              My <span className="text-[#3a80e9]">Watchlist</span>
            </h1>
            <p className="text-[#6b7280] text-sm font-medium">
              {watchlist.length} coin{watchlist.length !== 1 ? "s" : ""} being tracked
            </p>
          </div>
          <TabsComponent coins={coins} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4">
          <div className="text-6xl">⭐</div>
          <div className="text-center">
            <h2 className="text-2xl font-black text-white mb-2">
              Your watchlist is empty
            </h2>
            <p className="text-[#6b7280] text-sm max-w-xs mx-auto">
              Star coins from the dashboard to add them to your watchlist and track them here.
            </p>
          </div>
          <a href="/dashboard">
            <Button text="Go to Dashboard" />
          </a>
        </div>
      )}
    </div>
  );
}

export default Watchlist;
